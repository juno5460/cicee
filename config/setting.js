/**
 * Module dependencies.
 */

var express = require('express');
var flash = require('connect-flash');
var helpers = require('view-helpers');
var pkg = require('../package.json');
var cons = require('consolidate');

module.exports = function(app, config) {

  app.set('showStackError', true);

  // should be placed before express.static
  app.use(express.compress({
    filter: function(req, res) {
      return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
    },
    level: 9
  }));

  app.use(express.favicon());
  app.use(express.static(config.root + '/public'));

  // don't use logger for test env
  if (process.env.NODE_ENV !== 'test') {
    app.use(express.logger('dev'));
  }

  // assign the handlebars engine to .html files
  app.engine('html', cons.handlebars);

  // set views path, template engine and default layout
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'html');

  app.configure(function() {
    // expose package.json to views
    app.use(function(req, res, next) {
      res.locals.pkg = pkg;
      next();
    });

    // cookieParser should be above session
    app.use(express.cookieParser());

    // bodyParser should be above methodOverride
    // app.use(express.bodyParser());
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(express.methodOverride());

    app.use(express.session({
      secret: 'noobjs'
    }));

    // connect flash for flash messages - should be declared after sessions
    app.use(flash());

    // should be declared after session and flash
    app.use(helpers(pkg.name));

    // adds CSRF support
    if (process.env.NODE_ENV !== 'test') {
      app.use(express.csrf());

      // This could be moved to view-helpers :-)
      app.use(function(req, res, next) {
        res.locals.csrf_token = req.csrfToken();
        next();
      });
    }

    // routes should be at the last
    app.use(app.router);

    // assume "not found" in the error msgs
    // is a 404. this is somewhat silly, but
    // valid, you can do whatever you like, set
    // properties, use instanceof etc.

    app.use(function(err, req, res, next) {
      // treat as 404
      if (err.message && (~err.message.indexOf('not found') || (~err.message.indexOf('Cast to ObjectId failed')))) {
        return next();
      }

      // log it
      // send emails if you want
      console.error(err.stack);

      // error page
      res.status(500).render('500', {
        error: err.stack
      });
    });

    // assume 404 since no middleware responded
    app.use(function(req, res, next) {
      res.status(404).render('404', {
        url: req.originalUrl,
        error: 'Not found'
      });
    });
  });

  // development env config
  app.configure('development', function() {
    app.locals.pretty = true;
  });
};
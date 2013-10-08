var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
  development: {
    db: 'mongodb://localhost/noobjs_dev',
    root: rootPath,
    app: {
      name: 'Nodejs Express Mongoose Demo'
    }
  },
  test: {
    db: 'mongodb://localhost/noobjs_test',
    root: rootPath,
    app: {
      name: 'Nodejs Express Mongoose Demo'
    }
  },
  production: {
    db: 'mongodb://localhost/noobjs_dev',
    root: rootPath,
    app: {
      name: 'Nodejs Express Mongoose Demo'
    }
  }
};
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
  development: {
    httpPort: 80,
    dbHost: 'localhost',
    dbName: 'cicee',
    dbUser: 'juno',
    dbPassword: '5460',
    dbWaitForConnections: true,
    dbConnectionLimit: 10,
    dbQueueLimit: 0,
    root: rootPath,
    app: {
      name: 'Nodejs Express Mongoose Demo'
    }
  },
  production: {
    httpPort: 80,
    dbHost: 'localhost',
    dbName: 'cicee',
    dbUser: 'juno',
    dbPassword: '5460',
    dbWaitForConnections: true,
    dbConnectionLimit: 10,
    dbQueueLimit: 0,
    root: rootPath,
    app: {
      name: 'Nodejs Express Mongoose Demo'
    }
  }
};
const Remote = require('./remote');
const config = require('../config');

module.exports = new Remote(config.mysqlserv.host, config.mysqlserv.port);
const Remote = require('./remote');
const config = require('../config');

module.exports = new Remote(config.cacheserv.host, config.cacheserv.port);
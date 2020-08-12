const AuthController = require('./controller');
const store = require('../../../store/mysql');

module.exports = new AuthController(store);
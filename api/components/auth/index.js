const AuthController = require('./controller');
const store = require('../../../store/dummy');

module.exports = new AuthController(store);
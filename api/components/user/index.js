const UserController = require('./controller');
const store = require('../../../store/dummy');

module.exports = new UserController(store);
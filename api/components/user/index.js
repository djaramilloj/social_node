const UserController = require('./controller');
const store = require('../../../store/mysql');

module.exports = new UserController(store);
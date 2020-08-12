const UserController = require('./controller');
// const store = require('../../../store/mysql');
const store = require('../../../store/remote-mysql');

module.exports = new UserController(store);
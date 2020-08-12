const PostController = require('./controller');
const store = require('../../../store/mysql');

module.exports = new PostController(store);
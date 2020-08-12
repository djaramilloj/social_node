const TABLE = 'posts';

class PostController {
    constructor(injectedStore) {
        this.store = injectedStore;
        if (!this.store) {
            this.store = require('../../../store/mysql');
        }
    }

    list() {
        return this.store.list(TABLE);
    }
}

module.exports = PostController;

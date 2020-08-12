const { nanoid } = require('nanoid');
const auth = require('../auth');
const TABLE = 'user';

class UserController {
    constructor(injectedStore) {
        this.store = injectedStore;
        if (!this.store) {
            this.store = require('../../../store/mysql');
        }
    }

    list() {
        return this.store.list(TABLE);
    }

    get(id) {
        return this.store.get(TABLE, id); 
    }

    async upsert(data) {
        const user = {
            name: data.name,
        }

        if (data.username){
            user.username = data.username;
        }

        if(data.id) {
            user.id = data.id;
        } else {
            user.id = nanoid();
        }

        if (data.password) {
            await auth.upsert({
                id: user.id,
                username: data.username,
                password: data.password,
            })
        } 
        return this.store.upsert(TABLE, user);
    }

    remove(id) {
        return this.store.remove(TABLE, id);
    }

    follow(from, to) {
        return this.store.upsert(TABLE+'_follow', {
            user_from: from,
            user_to: to,
        })
    }

    async getFollowers(user) {
        const join = {};
        join[TABLE] = 'user_to';
        const query = {user_from: user};

        return await this.store.query(TABLE + '_follow', query, join);
    }
}

module.exports = UserController;

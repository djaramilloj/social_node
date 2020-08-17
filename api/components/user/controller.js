const { nanoid } = require('nanoid');
const auth = require('../auth');
const TABLE = 'user';

class UserController {
    constructor(injectedStore, injectedCache) {
        this.cache = injectedCache;
        this.store = injectedStore;
        if (!this.store) {
            this.store = require('../../../store/remote-mysql');
        }

        if (!this.cache) {
            this.cache = require('../../../store/remote-cache');
        }
    }

    async list() {
        let users = await this.cache.list(TABLE);
        if(!users) {
            console.log('no estaba en cache')
            users = await this.store.list(TABLE);
            cache.upsert(TABLE, users);
        }else {
            console.log('si esta en cache')
        }

        return users;
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

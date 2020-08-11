const { nanoid } = require('nanoid');
const auth = require('../auth');
const TABLE = 'user';

class UserController {
    constructor(injectedStore) {
        this.store = injectedStore;
        if (!this.store) {
            this.store = require('../../../store/dummy');
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

        if (data.password || data.username) {
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
}

module.exports = UserController;

// module.exports = function(injectedStore) {
//     let store = injectedStore;
//     if (!store) {
//         store = require('../../../store/dummy');
//     }

//     function list () {
//         return store.list(TABLE);
//     }

//     return {
//         list,
//     }
// }
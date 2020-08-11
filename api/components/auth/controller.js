const TABLE = 'auth';
const auth = require('../../../auth');
class AuthController {
    constructor(injectedStore) {
        this.store = injectedStore;
        if (!this.store) {
            this.store = require('../../../store/dummy');
        }
    }

    async login (username, password){
        const data = await this.store.query(TABLE, {username: username});
        if (data.password === password) {
            // generar token
            return auth.sign(data);
        } else {
            throw new Error('Información inválida')
        }
    }    
    
    upsert(data) {
        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.username = data.username
        }

        if (data.password) {
            authData.password = data.password
        }

        return this.store.upsert(TABLE, authData);
    }
}

module.exports = AuthController;

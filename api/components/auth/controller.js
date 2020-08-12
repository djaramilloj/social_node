const TABLE = 'auth';
const auth = require('../../../auth');
const bcrypt = require('bcrypt');


class AuthController {
    constructor(injectedStore) {
        this.store = injectedStore;
        if (!this.store) {
            this.store = require('../../../store/dummy');
        }
    }

    async login (username, password){
        const data = await this.store.query(TABLE, {username: username});
        return bcrypt.compare(password, data.password)
            .then(sonIguales => {
                if (sonIguales) {
                    // generar token
                    return auth.sign(data);
                } else {
                    throw new Error('Información inválida')
                }
            })
    }    

    
    async upsert(data) {
        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.username = data.username
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5);
        }

        return this.store.upsert(TABLE, authData);
    }
}

module.exports = AuthController;

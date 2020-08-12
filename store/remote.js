const request = require('request')

function createRemoteDB(host, port) {
        
    const URL = 'http://'+host+':'+port;

    async function list(table) {
        const rta = await req('GET', table, '', '');
        return rta;
    }

    async function get (table, id, data) {
        const rta = await req('GET', table, id, data);
        return rta; 
    }

    async function upsert (table, data){
        const rta = await req('GET', table, '', data);
        return rta; 
    }

    // async function query(table, query, join) {

    // }

    function req(methodd, table, id, data) {
        let url;
        if (id) {
            url = URL + '/' + table + '/' + id;
        } else{
            url = URL + '/' + table;
        }
        
        body = data || '';

        return new Promise((resolve, reject) => {
            request({
                methodd,
                headers: {
                    'content-type': 'application/json',
                },
                url,
                body,
            }, (err, req, body) => {
                if (err) {
                    console.error('Error in remote database');
                    return reject(err.message);
                }
                const result = JSON.parse(body);
                return resolve(result.body);
            })
        })
    }

    return {
        list,
        get,
        upsert,
        // query,
    }
}

module.exports = createRemoteDB;
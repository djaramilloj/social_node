const db = {
    'user': [
        {id: '1', name: 'daniela'},
        {id: '2', name: 'pedro'},
        {id: '3', name: 'juan'}
    ]
}; 

async function list (table) {
    return db[table] || [];
}

async function get (table, id ) {
    let col = await list(table);
    return col.filter(item => item.id === id)[0] || null
}

async function upsert (table, data) {
    if (!db[table]) {
        db[table] = [];
    }
    db[table].push(data);
    console.log(db);
}

async function remove (table, id) {
    const index = parseInt(id) - 1;
    db[table].splice(index, 1);
    return db[table];
}

async function query(table, q) {
    let col = await list(table);
    let keys = Object.keys(q);
    return col.filter(item => item[keys[0]] === q[keys[0]])[0] || null
}

module.exports = {
    list, 
    get, 
    upsert, 
    remove,
    query
}

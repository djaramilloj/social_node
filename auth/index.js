const jwt = require('jsonwebtoken');
const error = require('../utils/error');

function sign(data) {
    return jwt.sign(data, process.env.SECRET_JWT);
}

function checkPermissions(req, owner ) {
    const tokenDecoded = decodeHeader(req);
    console.log(tokenDecoded);

    // COMRPOBAR SI ES O NO PROPIO
    if (tokenDecoded.id !== owner ) {
        throw error('permiso denegado', 401);
    }
}

function getToken(auth) {
    if(!auth) {
        throw error('No viene token', 401);
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw error('formato inválido', 401);
    }

    let token = auth.replace('Bearer ', '');

    return token;
}


function verify(token) {
    return jwt.verify(token, process.env.SECRET_JWT);
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded; 
}


module.exports = {
    sign,
    checkPermissions,
}
const response = require('./response');

function errors (err, req, res) {
    console.error('[error]', err);

    const message = err.message || 'internalserver error';
    const status = err.statusCode || 500;

    response.error(req, res, message, status)
}


module.exports = errors;
const express = require('express');
const response = require('../../../network/response');
const controller = require('./index');
const router = express.Router();


router.post('/login', function (req, res) {
    controller.login(req.body.username, req.body.password)
        .then((token) => {
            response.success(req, res, token, 201);
        })
        .catch(error => response.error(req, res, error.message, 400))
})


module.exports = router;
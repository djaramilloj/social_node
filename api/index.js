require('dotenv').config()
const express = require('express');
const config = require('../config.js')
const user = require('./components/user/network'); 
const auth = require('./components/auth/network');
const post = require('./components/auth/network'); 
const swaggerUi = require('swagger-ui-express');
const app = express();
const body_parser = require('body-parser');
const error = require('../network/errors');

app.use(body_parser.json());
const swaggerDoc = require('./swagger.json')
// ROUTING
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/post', post);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(error);

app.listen(config.api.port, () => console.log(`api escuchando en http://localhost:${config.api.port}`));
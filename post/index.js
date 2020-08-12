require('dotenv').config()
const express = require('express');
const config = require('../config.js')
const post = require('./components/post/network'); 
const app = express();
const body_parser = require('body-parser');
const error = require('../network/errors');

app.use(body_parser.json());

// ROUTING
app.use('/api/post', post);

app.use(error);

app.listen(config.post.port, () => console.log(`post microservice running on http://localhost:${config.post.port}`));
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network');
const config = require('../config');

const app = express();

app.use(bodyParser.json());

// routing
app.use('/', router)

app.listen(process.env.MYSQL_PORT, () => console.log(`mysql running on http://localhost:${process.env.MYSQL_PORT}`))
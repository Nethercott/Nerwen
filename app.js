const mihome = require('mihome');
const moment = require('moment');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World');
});

const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send('Hello World')
});

routes.post('/devs', (req, res) => {
    console.log(req.body);
    return res.json({ok: true});
});

module.exports = routes;
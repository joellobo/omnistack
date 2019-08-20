const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();
mongoose.connect('mongodb+srv://monistack:omnistack@cluster0-jxhrd.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('./data/routers/usersRouter');
const authRouter = require('./data/routers/authRouter');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

//server.use routers
server.use('/api/users', usersRouter);
server.use('/api/', authRouter);

server.get('/', (req, res) =>{
    res.send(`<h3> Server is online. </h3>`);
})

module.exports = server;
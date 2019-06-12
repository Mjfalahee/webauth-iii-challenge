const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//add routers: Auth, Users

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

//server.use routers

server.get('/', (req, res) =>{
    res.send(`<h3> Server is online. </h3>`);
})

module.exports = server;
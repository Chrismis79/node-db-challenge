const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('./data/projects/project-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/projects', ProjectRouter);

module.exports = server;
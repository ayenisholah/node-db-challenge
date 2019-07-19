const express = require('express');
const knex = require('knex');
const db = knex(require('./knexfile').development);

const ProjectRouter = require('./projects/project-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);

module.exports = server;
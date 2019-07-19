const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
  addProjects,
  addActions,
  getProjectByID
}

function addActions(action) {
  return db('actions')
    .insert(action)
    .then(ids => ({ id: id[0] }));
}

function addProjects(project) {
  return db('projects')
    .insert(project)
    .then(ids => ({ id: id[0] }));
}
const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
  addProjects,
  addActions,
  getByID,
  getProjectByID
}

function getByID(id) {
  return db('projects')
  .where({ id })
  .first();
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

function getProjectByID(projectID) {
  return db('projects as P')
    .join('actions')
    .select('P.id', 'P.project_name', 'P.description', 'P.completed', 'actions')
    .where({ id: projectID });
}
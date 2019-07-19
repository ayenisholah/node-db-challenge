const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
  get,
  getByID,
  getProjectByID,
  addProjects,
  addActions
}

function get() {
  return db('projects');
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

function getProjectByID(id) {
  return db('projects')
    .join('actions', 'projects.id', 'actions.project_id')
    .select('*')
    .where({ id })
}
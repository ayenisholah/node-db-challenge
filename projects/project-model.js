const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
  get,
  getProjectActionsByID,
  getProjectByID,
  addProjects,
  addActions
}

function get() {
  return db('projects');
}

function getProjectByID(id) {
  return db('projects')
  .where({ id })
  .first();
}
function getProjectActionsByID(id) {
  return db('projects as p')
    .join('actions as a', 'projects.id', 'actions.project_id')
    .select('p.project_name', 'p.description', 'p.completed', 'a.action_name', 'a.notes', 'a.completed')
    .where({ id })
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


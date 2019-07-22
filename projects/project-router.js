const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.get();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects' })
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Projects.getProjectByID(id);

    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects' })
  }
});

router.get('/:id/actions', async (req, res) => {
  const { id } = req.params;

  try {
    const actions = await Projects.getProjectActionsByID(id);

    if (actions.length) {
      res.json(actions);
    } else {
      res.status(404).json({ message: 'Could not find the actions for given projects' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get actions' })
  }
});

router.post('/', async (req, res) => {
  const projectData = req.body;

  try {
    const project = await Projects.addProjects(projectData);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new project' });
  }
});

router.post('/:id/actions', async (req, res) => {
  const actionData = req.body;
  const { id } = req.params;

  try {
    const project = await getProjectActionsByID(id);

    if (project) {
      const action = await Projects.addActions(actionData, id);
      res.status(201).json(action);
    } else {
      res.status(404).json({ message: 'Could not find project with given id' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new action' });
  }
});

module.exports = router;
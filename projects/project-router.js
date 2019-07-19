const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.post('/', async (req, res) => {
  const projectData = req.body;

  try {
    const project = await Projects.addProjects(projectData);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new project' });
  }
});


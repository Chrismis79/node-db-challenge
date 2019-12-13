const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.find(req.query)
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      console.log("Error GET api/projects/", err)
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

module.exports = router;
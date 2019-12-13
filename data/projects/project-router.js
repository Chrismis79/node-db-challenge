const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.use((req, res, next) => {
    console.log("User router");
    next();
  })



module.export = router;
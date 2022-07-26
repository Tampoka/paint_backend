const express = require('express');
const controllers=require('./controllers');
const router = express.Router();

router.get('/',controllers.getProjects)
router.post('/',controllers.addProject);
router.get('/:id', controllers.getProject);
router.delete('/:id', controllers.deleteProject);

module.exports = router;
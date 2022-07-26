const express = require('express');
const controllers=require('./controllers');
const router = express.Router();

router.get('/',controllers.getDrawings)
router.post('/',controllers.addDrawing);
router.get('/:id', controllers.getDrawing);
router.delete('/:id', controllers.deleteDrawing);

module.exports = router;
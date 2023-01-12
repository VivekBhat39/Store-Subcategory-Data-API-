const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

router.post('/', classController.createClass);
router.get('/', classController.getClasses);
router.get('/:id', classController.getClass);
router.patch('/:id', classController.updateClass);
router.delete('/:id', classController.deleteClass);

module.exports = router;
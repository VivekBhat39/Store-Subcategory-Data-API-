const express = require('express');
const router = express.Router();
const collegeController = require('../controllers/collegeController');

router.post('/', collegeController.createCollege)
router.get('/', collegeController.getColleges);
router.get('/:id', collegeController.getCollege);
router.patch('/:id', collegeController.updateCollege);
router.delete('/:id', collegeController.deleteCollege);

module.exports = router;
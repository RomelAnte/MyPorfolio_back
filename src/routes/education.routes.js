const express = require('express');
const router = express.Router();
const educationController = require('../controllers/education.controller');
const validate = require('../validators/validate');
const educationSchema = require('../validators/education.validator');

router.get('/', educationController.listEducations);
router.post('/', validate(educationSchema), educationController.insertEducation);
router.get('/:id', educationController.getEducationById);
router.patch('/:id', validate(educationSchema), educationController.updateEducation);
router.delete('/:id', educationController.deleteEducation);

module.exports = router;
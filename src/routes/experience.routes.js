const express = require('express');
const router = express.Router();
const educationController = require('../controllers/education.controller');
const validate = require('../validators/validate');
const experienceSchema = require('../validators/experience.validator');

router.get('/', educationController.listEducations);
router.post('/', validate(experienceSchema), educationController.insertEducation);
router.get('/:id', educationController.getEducationById);
router.patch('/:id', validate(experienceSchema), educationController.updateEducation);
router.delete('/:id', educationController.deleteEducation);

module.exports = router;
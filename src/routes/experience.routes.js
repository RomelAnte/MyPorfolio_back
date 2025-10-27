const express = require('express');
const router = express.Router();
const educationController = require('../controllers/education.controller');

router.get('/', educationController.listEducations);
router.post('/', educationController.insertEducation);
router.get('/:id', educationController.getEducationById);
router.patch('/:id', educationController.updateEducation);
router.delete('/:id', educationController.deleteEducation);
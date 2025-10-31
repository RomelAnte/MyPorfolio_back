const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const validate = require('../validators/validate');
const projectSchema = require('../validators/project.validator');

router.get('/', projectController.listProjects);
router.post('/', validate(projectSchema), projectController.insertProject);
router.get('/:id', projectController.getProjectById);
router.patch('/:id', validate(projectSchema), projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
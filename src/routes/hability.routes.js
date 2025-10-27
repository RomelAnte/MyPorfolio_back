const express = require('express');
const router = express.Router();
const habilityController = require('../controllers/hability.controller');

router.get('/', habilityController.listHabilities);
router.post('/', habilityController.insertHability);
router.get('/:id', habilityController.getHabilityById);
router.patch('/:id', habilityController.updateHability);
router.delete('/:id', habilityController.deleteHability);
const express = require('express');
const router = express.Router();
const habilityController = require('../controllers/hability.controller');
const validate = require('../validators/validate');
const habilitySchema = require('../validators/hability.validator');

router.get('/', habilityController.listHabilities);
router.post('/', validate(habilitySchema), habilityController.insertHability);
router.get('/:id', habilityController.getHabilityById);
router.patch('/:id', validate(habilitySchema), habilityController.updateHability);
router.delete('/:id', habilityController.deleteHability);

module.exports = router;
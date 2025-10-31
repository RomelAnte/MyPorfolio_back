const express = require('express');
const router = express.Router();
const referenceController = require('../controllers/reference.controller');
const validate = require('../validators/validate');
const referenceSchema = require('../validators/reference.validator');

router.get('/', referenceController.listReferences);
router.post('/', validate(referenceSchema), referenceController.insertReference);
router.get('/:id', referenceController.getReferenceById);
router.patch('/:id', validate(referenceSchema), referenceController.updateReference);
router.delete('/:id', referenceController.deleteReference);

module.exports = router;
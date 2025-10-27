const express = require('express');
const router = express.Router();
const referenceController = require('../controllers/reference.controller');

router.get('/', referenceController.listReferences);
router.post('/', referenceController.insertReference);
router.get('/:id', referenceController.getReferenceById);
router.patch('/:id', referenceController.updateReference);
router.delete('/:id', referenceController.deleteReference);

module.exports = router;
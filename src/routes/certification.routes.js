const express = require('express');
const router = express.Router();
const certificationController = require('../controllers/certification.controller');
const validate = require('../validators/validate');
const certificationSchema = require('../validators/certification.validator');

router.get('/', certificationController.listCertificaciones);
router.post('/', validate(certificationSchema), certificationController.insertCertificacion);
router.get('/:id', certificationController.getCertificacionById);
router.patch('/:id', validate(certificationSchema), certificationController.updateCertificacion);
router.delete('/:id', certificationController.deleteCertificacion);

module.exports = router;
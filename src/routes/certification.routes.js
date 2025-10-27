const express = require('express');
const router = express.Router();
const certificationController = require('../controllers/certification.controller');

router.get('/', certificationController.listCertificaciones);
router.post('/', certificationController.insertCertificacion);
router.get('/:id', certificationController.getCertificacionById);
router.patch('/:id', certificationController.updateCertificacion);
router.delete('/:id', certificationController.deleteCertificacion);

module.exports = router;
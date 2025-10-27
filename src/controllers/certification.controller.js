const Certification = require('../models/Certification');

const listCertificaciones = async (req, res) => {
    try {
        const certifications = await Certification.query();

        res.json(certifications);
    } catch (error) {
    console.error(error);
        res.status(500).json({ error: 'Failed to fetch certifications' });
    }
};

const insertCertificacion = async (req, res) => {
    try {
        const { user_id, name, institution, date_obtained, credential_url } = req.body;
        const newCertification = await Certification.query().insert({
            user_id,
            name,
            institution,
            date_obtained,
            credential_url
        });

        res.status(201).json(newCertification);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create certification' });
    }   
};

const updateCertificacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, institution, date_obtained, credential_url } = req.body;
        const result = await Certification.query().patchAndFetchById(id, {
            name,
            institution,
            date_obtained,
            credential_url
        });

        if (!result) {
            res.json({ message: 'Certification updated successfully' });
        }

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update certification' });
    }
};

const deleteCertificacion = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Certification.query().deleteById(id);

        if (result == 0) {
            res.status(404).json({ error: 'Certification not found' });
        }

        res.json({ message: 'Certification deleted successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete certification' });
    }
};

const getCertificacionById = async (req, res) => {
    try {
        const { id } = req.params;
        const certification = await Certification.query().findById(id);

        if (!certification) {
            return res.status(404).json({ error: 'Certification not found' });
        }
        
        res.json(certification);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch certification' });
    }   
};

module.exports = {
    listCertificaciones,
    insertCertificacion,
    updateCertificacion,
    deleteCertificacion,
    getCertificacionById
};
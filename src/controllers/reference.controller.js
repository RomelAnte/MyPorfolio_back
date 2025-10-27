const Reference = require('../models/reference');

const listReferences = async (req, res) => {
    try {
        const references = await Reference.query();

        res.json(references);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch references' });
    }
};

const insertReference = async (req, res) => {
    try {
        const { user_id, name, company, position, phone, email } = req.body;
        const newReference = await Reference.query().insert({
            user_id,
            name,
            company,
            position,
            phone,
            email
        });

        res.status(201).json(newReference);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create reference' });
    }
};

const updateReference = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, company, position, phone, email } = req.body;
        const result = await Reference.query().patchAndFetchById(id, {
            name,
            company,
            position,
            phone,
            email
        });
        
        if (!result) {
            res.json({ message: 'Reference updated successfully' });
        }

        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update reference' });
    }
};

const deleteReference = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Reference.query().deleteById(id);

        if (result == 0) {
            res.status(404).json({ error: 'Reference not found' });
        }

        res.json({ message: 'Reference deleted successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete reference' });
    }
};

const getReferenceById = async (req, res) => {
    try {
        const { id } = req.params;
        const reference = await Reference.query().findById(id);

        if (!reference) {
            return res.status(404).json({ error: 'Reference not found' });
        }

        res.json(reference);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch reference' });
    }
};

module.exports = {
    listReferences,
    insertReference,
    updateReference,
    deleteReference,
    getReferenceById
};
const Hability = require('../models/Hability');

const listHabilities = async (req, res) => {
    try {
        const habilities = await Hability.query();
        res.json(habilities);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch habilities' });
    }
};

const insertHability = async (req, res) => {
    try {
        const { user_id, name, percentage } = req.body;
        const newHability = await Hability.query().insert({
            user_id,
            name,
            percentage
        });
        
        res.status(201).json(newHability);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create hability' });
    }
};

const updateHability = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, percentage } = req.body;
        const result = await Hability.query().patchAndFetchById(id, {
            name,
            percentage
        });
        
        if (!result) {
            res.json({ message: 'Hability updated successfully' });
        }

        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update hability' });
    }
};

const deleteHability = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Hability.query().deleteById(id);

        if (result == 0) {
            res.status(404).json({ error: 'Hability not found' });
        }

        res.json({ message: 'Hability deleted successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete hability' });
    }
};

const getHabilityById = async (req, res) => {
    try {
        const { id } = req.params;
        const hability = await Hability.query().findById(id);

        if (!hability) {
            return res.status(404).json({ error: 'Hability not found' });
        }
        
        res.json(hability);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch hability' });
    }
};

module.exports = {
    listHabilities,
    insertHability,
    updateHability,
    deleteHability,
    getHabilityById
};
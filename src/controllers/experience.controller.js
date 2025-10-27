const Experience = require('../models/Experience');

const listExperiences = async (req, res) => {
    try {
        const experiences = await Experience.query();
        
        res.json(experiences);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch experiences' });
    }
};

const insertExperience = async (req, res) => {
    try {
        const { user_id, company, position, start_date, end_date, responsibilities } = req.body;        
        const newExperience = await Experience.query().insert({
            user_id,
            company,
            position,
            start_date,
            end_date,
            responsibilities
        });

        res.status(201).json(newExperience);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create experience' });
    }
};

const updateExperience = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_id, company, position, start_date, end_date, responsibilities } = req.body;
        const result = await Experience.query().patchAndFetchById(id, {
            user_id,
            company,
            position,
            start_date,
            end_date,
            responsibilities
        });

        if (!result) {
            res.json({ message: 'Experience updated successfully' });
        }

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update experience' });
    }
};

const deleteExperience = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Experience.query().deleteById(id);

        if (result == 0) {
            res.status(404).json({ error: 'Experience not found' });
        }

        res.json({ message: 'Experience deleted successfully' });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete experience' });
    }
};

const getExperienceById = async (req, res) => {
    try {
        const { id } = req.params;
        const experience = await Experience.query().findById(id);

        if (!experience) {
            return res.status(404).json({ error: 'Experience not found' });
        }

        res.json(experience);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch experience' });
    }

};
module.exports = {
    listExperiences,
    insertExperience,
    updateExperience,
    deleteExperience,
    getExperienceById
};
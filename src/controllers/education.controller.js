const Education = require('../models/Education');

const listEducations = async (req, res) => {
    try {
        const educations = await Education.query();

        res.json(educations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch educations' });
    }
};

const insertEducation = async (req, res) => {
    try {
        const { user_id, institution, degree, start_date, end_date } = req.body;
        const newEducation = await Education.query().insert({
            user_id,
            institution,
            degree,
            start_date,
            end_date
        });

        res.status(201).json(newEducation);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create education' });
    }
}

const updateEducation = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_id, institution, degree, start_date, end_date } = req.body;        
        const result = await Education.query().patchAndFetchById(id, {
            user_id,
            institution,
            degree,
            start_date,
            end_date
        });

        if (!result) {
            res.json({ message: 'Education updated successfully' });
        }

        res.json(result);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update education' });
    }
};

const deleteEducation = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Education.query().deleteById(id);

        if (result === 0) {
            res.status(404).json({ error: 'Education not found' });
        }

        res.json({ message: 'Education deleted successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete education' });
    }
};

const getEducationById = async (req, res) => {
    try {
        const { id } = req.params;
        const education = await Education.query().findById(id);

        if (!education) {
            return res.status(404).json({ error: 'Education not found' });
        }

        res.json(education);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch education' });
    }
};

module.exports = {
    listEducations,
    insertEducation,
    updateEducation,
    deleteEducation,
    getEducationById
};
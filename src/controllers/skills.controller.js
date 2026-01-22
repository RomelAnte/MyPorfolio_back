const Skills = require('../models/Skills');

const getAllSkills = async (req, res) => {
    try {
        const skills = await Skills.query().orderBy('order', 'asc');
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch skills' });
    }
};

const addSkill = async (req, res) => {
    try {
        const { name, category_id } = req.body;
        const newSkill = await Skills.query().insert({
            name,
            category_id,
        });
        res.status(201).json(newSkill);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add skill' });
    }
};

const updateSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, category_id } = req.body;
        const updatedSkill = await Skills.query().patchAndFetchById(id, {
            name,
            category_id
        });

        if (!updatedSkill) {
            res.status(404).json({ error: "Skill not found" });
        }

        res.status(200).json(updatedSkill);
    } catch (error) {
        res.status(500).json({ error: "Failed to update skill" });
    }
};

const deleteSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const rowsDeleted = await Skills.query().deleteById(id);

        if (!rowsDeleted) {
            res.status(404).json({ error: "Skill not found" });
        }

        res.status(200).json({ message: "Skill deleted successfully" });
    } catch (error) {
        console.error("Error deleting skill:", error);
        res.status(500).json({ error: "Failed to delete skill" });
    }
};

const getSkillById = async (req, res) => {
    try {
        const { id } = req.params;
        const skill = await Skills.query().findById(id);

        if (!skill) {
            res.status(404).json({ error: "Skill not found" });
        }

        res.status(200).json(skill);
    } catch (error) {
        console.error("Error fetching skill:", error);
        res.status(500).json({ error: "Failed to fetch skill" });
    }
};

module.exports = {
    getAllSkills,
    addSkill,
    updateSkill,
    deleteSkill,
    getSkillById
};
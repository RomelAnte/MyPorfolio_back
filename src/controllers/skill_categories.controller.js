const { Skill_categories } = require('../models/Skill_categories');

const getAllSkillCategories = async (req, res) => {
    try {
        const skillCategories = await Skill_categories.query().orderBy('order', 'asc');
        res.status(200).json(skillCategories);
    } 
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch skill categories' });
    }
};

const addSkillCategory = async (req, res) => {
    try {
        const { name, icon, order } = req.body;
        const newSkillCategory = await Skill_categories.query().insert({
            name,
            icon,
            order
        });
        res.status(201).json(newSkillCategory);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add skill category' });
    }
};

const updateSkillCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, icon, order } = req.body;
        const updatedSkillCategory = await Skill_categories.query().patchAndFetchById(id, {
            name,
            icon,
            order
        });

        if (!updatedSkillCategory) {
            res.status(404).json({ error: "Skill category not found" });
        }

        res.status(200).json(updatedSkillCategory);
    } catch (error) {
        res.status(500).json({ error: "Failed to update skill category" });
    }
};

const deleteSkillCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const rowsDeleted = await Skill_categories.query().deleteById(id);

        if (!rowsDeleted) {
            res.status(404).json({ error: "Skill category not found" });
        }

        res.status(200).json({ message: "Skill category deleted successfully" });
    } catch (error) {
        console.error("Error deleting skill category:", error);
        res.status(500).json({ error: "Failed to delete skill category" });
    }
};

const getSkillCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const skillCategory = await Skill_categories.query().findById(id);

        if (!skillCategory) {
            res.status(404).json({ error: "Skill category not found" });
        }

        res.status(200).json(skillCategory);
    } catch (error) {
        console.error("Error fetching skill category:", error);
        res.status(500).json({ error: "Failed to fetch skill category" });
    }
};

module.exports = {
    getAllSkillCategories,
    addSkillCategory,
    updateSkillCategory,
    deleteSkillCategory,
    getSkillCategoryById
};
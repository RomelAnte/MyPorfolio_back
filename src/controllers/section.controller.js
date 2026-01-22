const { Section } = require('../models/Section');

const getAllSections = async (req, res) => {
  try {
    const sections = await Section.query();

    res.status(200).json(sections);
  } catch (error) {
    console.error("Error fetching sections:", error);
    res.status(500).json({ error: "Failed to fetch sections" });
  }
};

const addSection = async (req, res) => {
  try {
    const { key, title, subtitle, is_active, order } = req.body;
    const newSection = await Section.query().insert({
        key,
        title,
        subtitle,
        is_active,
        order
    });

    res.status(201).json(newSection);
  } catch (error) {
    console.error("Error adding section:", error);
    res.status(500).json({ error: "Failed to add section" });
  }
};

const updateSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { key, title, subtitle, is_active, order } = req.body;
    const updatedSection = await Section.query().patchAndFetchById(id, {
        key,
        title,
        subtitle,
        is_active,
        order
    });

    if (!updatedSection) {
      res.status(404).json({ error: "Section not found" });
    }

    res.status(200).json(updatedSection);
  } catch (error) {
    console.error("Error updating section:", error);
    res.status(500).json({ error: "Failed to update section" });
  }
};

const deleteSection = async (req, res) => {
  try {
    const { id } = req.params;
    const rowsDeleted = await Section.query().deleteById(id);

    if (!rowsDeleted) {
      res.status(404).json({ error: "Section not found" });
    }

    res.status(200).json({ message: "Section deleted successfully" });
  } catch (error) {
    console.error("Error deleting section:", error);
    res.status(500).json({ error: "Failed to delete section" });
  }
};

const getSectionById = async (req, res) => {
  try {
    const { id } = req.params;
    const section = await Section.query().findById(id);

    if (!section) {
      res.status(404).json({ error: "Section not found" });
    }
    
        res.status(200).json(section);
  } catch (error) {
        console.error("Error fetching section:", error);
        res.status(500).json({ error: "Failed to fetch section" });
  }
};

module.exports = {
  getAllSections,
  addSection,
  updateSection,
  deleteSection,
  getSectionById
};
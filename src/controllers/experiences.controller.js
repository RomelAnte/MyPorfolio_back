const Experiences = require("../models/Experiences");

const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experiences.query();

    res.status(200).json(experiences);
  } catch (error) {
    console.error("Error fetching experiences:", error);
    res.status(500).json({ error: "Failed to fetch experiences" });
  }
};

const addExperience = async (req, res) => {
  try {
    const { role, company, start_date, end_date, description, is_current } =
      req.body;
    const newExperience = await Experiences.query().insert({
      role,
      company,
      start_date,
      end_date,
      description,
      is_current,
    });

    res.status(201).json(newExperience);
  } catch (error) {
    console.error("Error adding experience:", error);
    res.status(500).json({ error: "Failed to add experience" });
  }
};

const updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const { role, company, start_date, end_date, description, is_current } =
      req.body;
    const updatedExperience = await Experiences.query().patchAndFetchById(id, {
      role,
      company,
      start_date,
      end_date,
      description,
      is_current,
    });

    if (!updatedExperience) {
      res.status(404).json({ error: "Experience not found" });
    }

    res.status(200).json(updatedExperience);
  } catch (error) {
    console.error("Error updating experience:", error);
    res.status(500).json({ error: "Failed to update experience" });
  }
};

const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const rowsDeleted = await Experiences.query().deleteById(id);

    if (!rowsDeleted) {
      res.status(404).json({ error: "Experience not found" });
    }

    res.status(200).json({ message: "Experience deleted successfully" });
  } catch (error) {
    console.error("Error deleting experience:", error);
    res.status(500).json({ error: "Failed to delete experience" });
  }
};

const getExperienceById = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experiences.query().findById(id);

    if (!experience) {
      res.status(404).json({ error: "Experience not found" });
    }
    res.status(200).json(experience);
  } catch (error) {
    console.error("Error fetching experience:", error);
    res.status(500).json({ error: "Failed to fetch experience" });
  }
};

module.exports = {
  getAllExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
  getExperienceById,
};

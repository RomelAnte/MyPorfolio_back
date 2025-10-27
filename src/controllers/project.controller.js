const Project = require('../models/project');

const listProjects = async (req, res) => {
    try {
        const projects = await Project.query();
        res.json(projects);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

const insertProject = async (req, res) => {
    try {
        const { user_id, title, description, project_url, repository_url,image_url } = req.body;
        const newProject = await Project.query().insert({
            user_id,
            title,
            description,
            project_url,
            repository_url,
            image_url,
        });

        res.status(201).json(newProject);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create project' });
    }
};

const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_id, title, description, project_url, repository_url,image_url } = req.body;
        const result = await Project.query().patchAndFetchById(id, {
            user_id,
            title,
            description,
            project_url,
            repository_url,
            image_url,
        });

        if (!result) {
            res.json({ message: 'Project updated successfully' });
        }

        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update project' });
    }
};

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Project.query().deleteById(id);

        if (result == 0) {
            res.status(404).json({ error: 'Project not found' });
        }

        res.json({ message: 'Project deleted successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete project' });
    }
};

const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.query().findById(id);

        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        
        res.json(project);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch project' });
    }   
};

module.exports = {
    listProjects,
    insertProject,
    updateProject,
    deleteProject,
    getProjectById
};

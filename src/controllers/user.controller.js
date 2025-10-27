const User = require('../models/User');

const listUsers = async (req, res) => {
    try {
        const users = await User.query();

        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

const insertUser = async (req, res) => {
    try {
        const { name, last_name, email, password, description, profile_image } = req.body;
        const newUser = await User.query().insert({
            name,
            last_name,
            email,
            password,
            description,
            profile_image
        });

        res.status(201).json(newUser);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {  name, last_name, email, password, description, profile_image } = req.body; 
        const result = await User.query().patchAndFetchById(id, {
            name,
            last_name,
            email,
            password,
            description,
            profile_image
        });

        if (!result) {
            res.json({ message: 'User updated successfully' });
        }

        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update user' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await User.query().deleteById(id);

        if (result == 0) {
            res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.query().findById(id);
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

module.exports = {
    listUsers,
    insertUser,
    updateUser,
    deleteUser,
    getUserById
};
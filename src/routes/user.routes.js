const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.listUsers);
router.post('/', userController.insertUser);
router.get('/:id', userController.getUserById);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
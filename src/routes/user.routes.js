const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validate  = require('../validators/validate');
const userSchema = require('../validators/user.validator');

router.get('/', userController.listUsers);
router.post('/', validate(userSchema), userController.insertUser);
router.get('/:id', userController.getUserById);
router.patch('/:id', validate(userSchema), userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
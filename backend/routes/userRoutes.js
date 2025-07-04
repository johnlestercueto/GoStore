const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// Auth routes
router.post('/signup', userController.registerUser);
router.post('/login', userController.loginUser);

// CRUD routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
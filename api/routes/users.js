const express = require('express');
const router = express.Router();
const usersController = require('../controller/users');
router.post('/api/users', usersController.postSignup);
router.get('/api/users', usersController.getUsers);
module.exports = router;
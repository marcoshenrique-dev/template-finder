const { Router } = require('express');

const usersRoutes = Router();
const UserController = require('../app/controllers/UserController');

usersRoutes.post('/', UserController.store);
usersRoutes.get('/', UserController.index);

module.exports = usersRoutes;

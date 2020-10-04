const { Router } = require('express');

const routes = Router();

const repositoriesRoutes = require('./repositories.routes');
const usersRoutes = require('./users.routes');

routes.use('/users', usersRoutes);
routes.use('/repositories', repositoriesRoutes);

module.exports = routes;

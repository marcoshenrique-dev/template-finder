const { Router } = require('express');

const route = Router();

const UserController = require('./app/controllers/UserController');
const RepositorieController = require('./app/controllers/RepositorieController');

route.post('/users', UserController.store);
route.get('/users', UserController.index);

route.post('/repositories', RepositorieController.store);
route.get('/repositories', RepositorieController.index);
route.get('/repositories/author/:author', RepositorieController.showForAuthor);
route.get('/repositories/name/:name', RepositorieController.showForName);
route.get('/repositories/techs/:techs', RepositorieController.showForTechs);

module.exports = route;

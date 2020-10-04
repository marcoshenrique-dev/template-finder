const { Router } = require('express');

const repositoriesRoutes = Router();
const RepositorieController = require('../app/controllers/RepositorieController');

repositoriesRoutes.post('/', RepositorieController.store);
repositoriesRoutes.get('/', RepositorieController.index);
repositoriesRoutes.get('/author/:author', RepositorieController.showForAuthor);
repositoriesRoutes.get('/name/:name', RepositorieController.showForName);
repositoriesRoutes.get('/techs/:techs', RepositorieController.showForTechs);

module.exports = repositoriesRoutes;

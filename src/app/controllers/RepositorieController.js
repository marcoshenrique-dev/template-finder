const RepositorieRepository = require('../repository/RepositorieRepository');

class RepositorieController {
  store(req, res) {
    const {
      name, link_repositorie, tags, description, id_user,
    } = req.body;
    const repositorie = RepositorieRepository.create({
      name, link_repositorie, tags, description, id_user,
    });
    res.send(repositorie);
  }

  index(req, res) {
    const repositorie = RepositorieRepository.findAll();
    res.send(repositorie);
  }

  showForName(req, res) {
    const { name } = req.params;
    const repositorie = RepositorieRepository.findByName(name);
    res.send(repositorie);
  }

  showForAuthor(req, res) {
    const { author } = req.params;
    const repositorie = RepositorieRepository.findByAuthor(author);
    res.send(repositorie);
  }

  showForTechs(req, res) {
    const { techs } = req.params;
    const repositorie = RepositorieRepository.findByTechs(techs);
    res.send(repositorie);
  }
}

module.exports = new RepositorieController();

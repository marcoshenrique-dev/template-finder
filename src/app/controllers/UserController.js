const UserRepository = require('../repository/UserRepository');

class UserController {
  store(req, res) {
    const {
      name, email, password, link_github, imagem_url,
    } = req.body;
    const user = UserRepository.create({
      name, email, password, link_github, imagem_url,
    });
    res.send(user);
  }

  index(req, res) {
    const users = UserRepository.findAll();
    res.send(users);
  }
}

module.exports = new UserController();

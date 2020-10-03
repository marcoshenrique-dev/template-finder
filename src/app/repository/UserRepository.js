class UserRepository {
  create(data) {
    return (data);
  }

  findAll() {
    return ([

      {
        name: 'Marcos Henrique',
        email: 'marcoshenriqueh393@gmail.com',
        password: '98765',
        link_github: 'https://github.com/marcoshenrique-dev',
        imagem_url: 'https://avatars0.githubusercontent.com/u/51785898?s=460&u=8fb1648aa6c89be1264e64929af6215795cc9dbf&v=4',
      },
      {
        name: 'Marcos Henrique',
        email: 'marcoshenriqueh393@gmail.com',
        password: '98765',
        link_github: 'https://github.com/marcoshenrique-dev',
        imagem_url: 'https://avatars0.githubusercontent.com/u/51785898?s=460&u=8fb1648aa6c89be1264e64929af6215795cc9dbf&v=4',
      },
    ]);
  }
}

module.exports = new UserRepository();

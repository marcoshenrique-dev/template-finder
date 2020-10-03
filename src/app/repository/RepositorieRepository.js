class RepositorieRepository {
  create(data) {
    return (data);
  }

  findAll() {
    return ([

      {
        name: 'Postgress',
        link_repositorie: 'http://github.com',
        tags: ['postgress', 'node'],
        description: 'Projeto criado para facilitar o uso do postgreSQL',
        id_user: '877663-411gry13gr3',
      },

      {
        name: 'Postgress',
        link_repositorie: 'http://github.com',
        tags: ['postgress', 'node'],
        description: 'Projeto criado para facilitar o uso do postgreSQL',
        id_user: '877663-411gry13gr3',
      },
    ]);
  }

  findByName() {
    return ([

      {
        name: 'Postgress',
        link_repositorie: 'http://github.com',
        tags: ['postgress', 'node'],
        description: 'Projeto criado para facilitar o uso do postgreSQL',
        id_user: '877663-411gry13gr3',
      },

      {
        name: 'Postgress',
        link_repositorie: 'http://github.com',
        tags: ['postgress', 'node'],
        description: 'Projeto criado para facilitar o uso do postgreSQL',
        id_user: '877663-411gry13gr3',
      },
    ]);
  }

  findByTechs() {
    return ([

      {
        name: 'Postgress',
        link_repositorie: 'http://github.com',
        tags: ['postgress', 'node'],
        description: 'Projeto criado para facilitar o uso do postgreSQL',
        id_user: '877663-411gry13gr3',
      },

      {
        name: 'Postgress',
        link_repositorie: 'http://github.com',
        tags: ['postgress', 'node'],
        description: 'Projeto criado para facilitar o uso do postgreSQL',
        id_user: '877663-411gry13gr3',
      },
    ]);
  }

  findByAuthor() {
    return ([

      {
        name: 'Postgress',
        link_repositorie: 'http://github.com',
        tags: ['postgress', 'node'],
        description: 'Projeto criado para facilitar o uso do postgreSQL',
        id_user: '877663-411gry13gr3',
      },

      {
        name: 'Postgress',
        link_repositorie: 'http://github.com',
        tags: ['postgress', 'node'],
        description: 'Projeto criado para facilitar o uso do postgreSQL',
        id_user: '877663-411gry13gr3',
      },
    ]);
  }
}

module.exports = new RepositorieRepository();

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      role: DataTypes.INTEGER,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      token: DataTypes.STRING
    */
    
    return queryInterface.bulkInsert('Users', [{
      firstname: 'Olayinka',
      lastname: 'Raheem',
      role: 1,
      username: 'Admin',
      password: '$2b$08$AffKvSeEsqHMFGHEMj.a3uZJnXfGIXEjIhIr72IMoRIfLQyHPns32',
      token: Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g,'').repeat(5),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      firstname: 'Adekoya',
      lastname: 'Dammy',
      role: 2,
      username: 'Caterer1',
      password: '$2b$08$AffKvSeEsqHMFGHEMj.a3uZJnXfGIXEjIhIr72IMoRIfLQyHPns32',
      token: Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').repeat(5),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      firstname: 'Ben',
      lastname: 'Jude',
      role: 2,
      username: 'Caterer2',
      password: '$2b$08$AffKvSeEsqHMFGHEMj.a3uZJnXfGIXEjIhIr72IMoRIfLQyHPns32',
      token: Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').repeat(5),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      firstname: 'Bade',
      lastname: 'Smith',
      role: 3,
      username: 'user1',
      password: '$2b$08$AffKvSeEsqHMFGHEMj.a3uZJnXfGIXEjIhIr72IMoRIfLQyHPns32',
      token: Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').repeat(5),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      firstname: 'Faith',
      lastname: 'Phillips',
      role: 3,
      username: 'user2',
      password: '$2b$08$AffKvSeEsqHMFGHEMj.a3uZJnXfGIXEjIhIr72IMoRIfLQyHPns32',
      token: Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').repeat(5),
      created_at: new Date(),
      updated_at: new Date()
    }

  ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};

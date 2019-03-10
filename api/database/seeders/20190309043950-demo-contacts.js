'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      {
        user_id: 2,
        phone: '+23456768594',
        email: 'sammy1@mail.com',
        address: '',
        city: '',
        state: '',
        country: '',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 3,
        phone: '+23456768595',
        email: 'sammy2@mail.com',
        address: '',
        city: '',
        state: '',
        country: '',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 4,
        phone: '+23456768596',
        email: 'sammy3@mail.com',
        address: '',
        city: '',
        state: '',
        country: '',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 5,
        phone: '+23456768597',
        email: 'sammy4@mail.com',
        address: '',
        city: '',
        state: '',
        country: '',
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
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};

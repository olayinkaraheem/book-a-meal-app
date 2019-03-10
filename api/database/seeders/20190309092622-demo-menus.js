'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      
    return queryInterface.bulkInsert('Menus', [
      {
        meal_id: 2,
        deleted: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        meal_id: 3,
        deleted: 0,
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
    return queryInterface.bulkDelete('Menus', null, {});

  }
};

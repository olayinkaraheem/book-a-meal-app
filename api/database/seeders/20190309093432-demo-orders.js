'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.bulkInsert('Orders', [
      {
        meal_id: 3,
        user_id: 4,
        quantity: 2,
        amount: 1200.00,
        status: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        meal_id: 2,
        user_id: 4,
        quantity: 1,
        amount: 500.00,
        status: 0,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Orders', null, {});
  }
};

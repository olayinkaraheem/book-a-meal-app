'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      
      name: DataTypes.STRING,
      size: DataTypes.STRING,
      price: DataTypes.STRING,
      image: DataTypes.STRING,
      currency: DataTypes.STRING,
      caterer_id: DataTypes.INTEGER,
      active: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER

*/
    return queryInterface.bulkInsert('Meals', [
      {
        name: 'Jollof Rice',
        size: 'plates',
        price: '500',
        image: "test.png",
        currency: 'NGN',
        caterer_id: 3,
        active: 1,
        // rating: 5,
        updated_by: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Fried Rice',
        size: 'plates',
        price: '200',
        image: "test.png",
        currency: 'NGN',
        caterer_id: 3,
        active: 1,
        // rating: 5,
        updated_by: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Coconut Rice',
        size: 'plates',
        price: '500',
        image: "test.png",
        currency: 'NGN',
        caterer_id: 2,
        active: 1,
        // rating: 5,
        updated_by: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Apache Rice',
        size: 'plates',
        price: '750',
        image: "test.png",
        currency: 'NGN',
        caterer_id: 3,
        active: 1,
        // rating: 5,
        updated_by: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Node Rice',
        size: 'plates',
        price: '750',
        image: "test.png",
        currency: 'NGN',
        caterer_id: 1,
        active: 1,
        // rating: 5,
        updated_by: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Meals', null, {});
  }
};

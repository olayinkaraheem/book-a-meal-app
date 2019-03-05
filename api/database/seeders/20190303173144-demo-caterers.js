'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      user_id: DataTypes.INTEGER,
      restaurant_name: DataTypes.STRING,
      image_url: DataTypes.STRING,
      rating: DataTypes.INTEGER
    */
      return queryInterface.bulkInsert('Caterers', [
        {
          user_id: 2,
          restaurant_name: 'Sibi',
          image_url: 'nHHBnJKihCffhgj.png',
          rating: 5
        },
        {
          user_id: 3,
          restaurant_name: 'Spoon',
          image_url: 'nHHB87HJj98bhfhgj.png',
          rating: 5
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
  }
};

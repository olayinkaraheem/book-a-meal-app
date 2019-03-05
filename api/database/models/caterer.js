'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caterer = sequelize.define('Caterer', {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'user_id'
      }
    },
    restaurant_name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Caterer.associate = function(models) {
    // associations can be defined here
    Caterer.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    // Caterer.hasMany(models.Meal) Sequelize automatically generates another column CatererId with this which is not required
  };
  return Caterer;
};
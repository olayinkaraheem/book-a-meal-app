'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caterer = sequelize.define('Caterer', {
    userId: DataTypes.INTEGER,
    restaurantName: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Caterer.associate = function(models) {
    // associations can be defined here
    Caterer.hasOne(User);
    Caterer.hasMany(Meal)
  };
  return Caterer;
};
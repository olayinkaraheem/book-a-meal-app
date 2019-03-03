'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caterer = sequelize.define('Caterer', {
    user_id: DataTypes.INTEGER,
    restaurant_name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Caterer.associate = function(models) {
    // associations can be defined here
    Caterer.hasOne(User);
    Caterer.hasMany(Meal)
  };
  return Caterer;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    currency: DataTypes.STRING,
    catererId: DataTypes.INTEGER,
    // activeToday: DataTypes.INTEGER,
    active: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER
  }, {});
  Meal.associate = function(models) {
    // associations can be defined here
    Meal.belongsTo(Caterer);
  };
  return Meal;
};
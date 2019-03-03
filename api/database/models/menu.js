'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    meal_id: DataTypes.INTEGER,
    deleted: DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};
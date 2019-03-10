'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    meal_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Meal',
        key: 'id',
        as: 'meal_id'
      }
    },
    deleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  }, {
    underscored: true
  });
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsTo(models.Meal, {
      foreignKey: 'meal_id',
      as: 'caterer'
    });
  };
  return Menu;
};
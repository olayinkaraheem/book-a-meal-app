'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    currency: DataTypes.STRING,
    caterer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Caterer',
        key: 'id',
        as: 'caterer_id'
      }
    },
    // activeToday: DataTypes.INTEGER,
    active: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },

    updated_by: {
      type: DataTypes.INTEGER,
      defaultValue: 0 
    }
  }, {
    underscored: true
  });
  Meal.associate = function(models) {
    // associations can be defined here
    Meal.belongsTo(models.Caterer, {
      foreignKey: 'caterer_id',
      as: 'caterer'
    });
    
    // Meal.hasMany(models.Menu, {
    //   foreignKey: 'id',
    //   as: 'menu'
    // });
  };
  return Meal;
};
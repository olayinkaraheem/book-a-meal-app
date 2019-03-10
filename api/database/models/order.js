'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    meal_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Meal',
        key: 'id',
        as: 'meal_id'
      }
    },
    user_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL(10, 2),
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    underscored: true
  });
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.Meal, {});
  };
  return Order;
};
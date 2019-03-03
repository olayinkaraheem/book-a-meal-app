'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    meal_id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL(10, 2),
    status: DataTypes.INTEGER,
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};
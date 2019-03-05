'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    role: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING

    // Timestamps
    // created_at: Sequelize.DATE,
    // updated_at: Sequelize.DATE,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    // User.hasOne(models.Caterer);
    User.hasMany(models.Contact);
  };
  return User;
};
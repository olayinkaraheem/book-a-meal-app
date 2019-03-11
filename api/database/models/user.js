'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    role: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    // token: DataTypes.STRING,
    authorizations: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
      allowNull: true,
    }

    // Timestamps
    // created_at: Sequelize.DATE,
    // updated_at: Sequelize.DATE,
  }, {
    underscored: true
  });
  User.associate = function(models) {
    // associations can be defined here
    // User.hasOne(models.Caterer);
    User.hasMany(models.Contact);
  };
  return User;
};
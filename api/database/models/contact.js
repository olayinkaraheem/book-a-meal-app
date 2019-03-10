'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    user_id: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
      underscored: true
  });
  Contact.associate = function(models) {
    // associations can be defined here
    Contact.belongsTo(models.User);
  };
  return Contact;
};
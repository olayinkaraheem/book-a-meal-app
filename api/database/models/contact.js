'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    userId: Sequelize.INTEGER,
    phone: Sequelize.STRING,
    email: Sequelize.STRIN,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    country: Sequelize.STRING
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
    Contact.belongsTo(User);
  };
  return Contact;
};
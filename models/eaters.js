'use strict';
module.exports = function(sequelize, DataTypes) {
  var Eaters = sequelize.define('Eaters', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      Eaters.hasOne(models.Burgers);
        // associations can be defined here
      }
    }
  });
  return Eaters;
};
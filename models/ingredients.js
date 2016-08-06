'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ingredients = sequelize.define('Ingredients', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      Ingredients.belongsToMany(models.Burgers, {through: 'Recipe'});
      }
    }
  });
  return Ingredients;
};
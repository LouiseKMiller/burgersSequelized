'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  },
  {
    freezeTableName: true // Model tableName will be the same as the model name
  },
  {
    classMethods: {
      associate: function(models) {
  //      Burgers.belongsToMany(models.Ingredients, {through: 'Recipe'});
        // associations can be defined here
      }
    }
  });
  return Burgers;
};
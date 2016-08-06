'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
        return queryInterface.bulkInsert('Ingredients', [{
          name: 'Beef Patty'
        }, {
          name: 'Cheese'
        }, {
          name: 'Buns'
        }, {
          name: 'Lettuce'
        }, {
          name: 'Tomatoes'
        }], {});
},

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
      return queryInterface.bulkDelete('Ingredients', null, {});
 }
};

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
      return queryInterface.bulkInsert('Burgers', [{
        burger_name: 'Austin\'s Favorite Burger',
        devoured: false
        }, {
        burger_name: 'Austin\'s Favorite Burger',
        devoured: false
        }, {
        burger_name: 'Porky\'s Demise',
        devoured: false
        }, {
        burger_name: 'Veggie Burger',
        devoured: false
        }, {
        burger_name: 'Old Fashioned Cheese Burger',
        devoured: false
      }],
      {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'פירות וירקות',
        code:'1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'מוצרי ניקיון',
        code:'2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'מאפים',
        code:'3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'בשר ודגים',
        code:'4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};

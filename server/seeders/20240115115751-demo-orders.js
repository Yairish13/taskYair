'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert('Orders', [
    //   // {
    //   //   fullName: 'יוחנן כהן',
    //   //   address: 'מדינת היהודים 34',
    //   //   email: 'yoch@example.com',
    //   //   products: JSON.stringify([{ productId: 1, quantity: 2 }, { productId: 2, quantity: 1 }]),
    //   //   createdAt: new Date(),
    //   //   updatedAt: new Date(),
    //   // },
    // ]
    // );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};

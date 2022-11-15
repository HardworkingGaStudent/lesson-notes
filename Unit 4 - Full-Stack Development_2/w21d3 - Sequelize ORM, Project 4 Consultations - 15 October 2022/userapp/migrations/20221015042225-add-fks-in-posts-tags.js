'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('postsTags', 'postId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'posts',
        key: 'id'
      },
      onDelete: 'CASCADE'
    });

    await queryInterface.changeColumn('postsTags', 'tagId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'tags',
        key: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('postsTags', 'postId', {
      type: Sequelize.INTEGER
    });

    await queryInterface.changeColumn('postsTags', 'tagId', {
      type: Sequelize.INTEGER
    });
  }
};
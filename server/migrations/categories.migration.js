export default {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      "Categories",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          unique: true,
          allowNull: false
        },
        category: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      { freezeTable: true }
    );
  },
  down(queryInterface, Sequelize) {
    return queryInterface.DropTable("Categories");
  }
};

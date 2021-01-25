'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Animal = loader.database.define(
  'animal',
  {
    animalNum: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    
    animalSum: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Animal;
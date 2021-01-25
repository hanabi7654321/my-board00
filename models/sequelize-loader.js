'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/my_board00'
);

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};
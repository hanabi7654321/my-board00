'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Comment = loader.database.define(
  'comments',
  {
    commentId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    commentBody: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    postedBy: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    postedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['postedBy']
      }
    ]
  }
);

module.exports = Comment;

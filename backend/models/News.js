const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'news',
  {
    news_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title:{
        type:Sequelize.STRING
    },
    imageURL:{
        type:Sequelize.STRING
    },
    country:{
        type:Sequelize.STRING
    },
    city:{
      type:Sequelize.STRING
    },
    content:{
        type:Sequelize.STRING,
        allowNull: true
    },
    reference:{
        type:Sequelize.STRING,
    },
    date:{
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW
    }  
  },
  {
    timestamps: false
  }
)



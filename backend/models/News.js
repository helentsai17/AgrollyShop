const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'news',
  {
    news_id: {
      type: Sequelize.INTEGER,
      allowNull: false
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
    content:{
        type:Sequelize.STRING,
        allowNull: true
    },
    reference:{
        type:Sequelize.STRING,
    },
    date:{
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }  
  },
  {
    timestamps: false
  }
)

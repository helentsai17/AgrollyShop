const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'feedback',
  {
    fid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    phone_number:{
        type:Sequelize.STRING
    },
    country:{
        type:Sequelize.STRING
    },
    feedback_content:{
        type:Sequelize.STRING,
        allowNull: true
    }  
  },
  {
    timestamps: false
  }
)

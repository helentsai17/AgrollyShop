const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'good',
  {
    good_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    fid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    g_name:{
        type:Sequelize.STRING
    },
    g_price:{
        type:Sequelize.INTEGER
    },
    g_description:{
        type:Sequelize.STRING
    },
    g_type:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    g_piture:{
        type:Sequelize.STRING,
    } 
  },
  {
    timestamps: false
  }
)

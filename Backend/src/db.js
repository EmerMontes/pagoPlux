require("dotenv").config();
const { Sequelize } = require('sequelize');
const {database, username, password,host} = require('./config/config.js')

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
  logging: false
});

module.exports = {
   conn: sequelize
}
  


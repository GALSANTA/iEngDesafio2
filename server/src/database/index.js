const Sequilize = require('sequelize');
const dbConfig = require('../config/databaseConfig');

const connection = new Sequilize(dbConfig);

module.exports = connection;
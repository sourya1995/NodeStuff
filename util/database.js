const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_complete', 'root', 'sourya95', {dialect: 'mysql', host: 'localhost'});
module.exports = sequelize;
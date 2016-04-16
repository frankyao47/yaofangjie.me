var Sequelize = require('sequelize');

var config = require('./config.js');


//mysql connection
var sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host : config.db.host,
    dialect : 'mysql'
});


//model
var User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    aa: { type: Sequelize.STRING, allowNull: false },
    is_admin: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
}, {
    freezeTableName: true, //disable the modifaction of table names
    timestamps: false //not add updatedAt & createdAt attributes
});

var Tips = sequelize.define('tips', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: Sequelize.STRING },
    content: { type: Sequelize.TEXT }
}, {
    freezeTableName: true
});


//create the tables if not exist
//User.sync({force: true}): drop table first and create the new table
User.sync();
Tips.sync();


//exports
var db = {
    User: User,
    Tips: Tips
}

module.exports = db;
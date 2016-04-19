var Sequelize = require('sequelize');

var config = require('./config.js');


//mysql connection
var sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host : config.db.host,
    dialect : 'mysql'
});

//model
var User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    is_admin: { type: Sequelize.BOOLEAN, defaultValue: false }
}, {
    freezeTableName: true, //disable the modifaction of table names
    timestamps: false //not add updatedAt & createdAt attributes
});

var Tip = sequelize.define('tip', {
    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    type: { type: Sequelize.STRING, allowNull: false  },
    content: { type: Sequelize.TEXT, allowNull: false  }
}, {
    freezeTableName: true
});

var Blog = sequelize.define('blog', {
    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.TEXT, allowNull: false },
    content: { type: Sequelize.TEXT, allowNull: false },
    brief: { type: Sequelize.TEXT, allowNull: false  },
    read_num: { type: Sequelize.INTEGER, defaultValue: 0 }
}, {
    freezeTableName: true
});

//create the tables if not exist
//User.sync({force: true}): drop table first and create the new table
User.sync();
Tip.sync();
Blog.sync();

//exports
var db = {
    User: User,
    Tip: Tip,
    Blog: Blog
}

module.exports = db;
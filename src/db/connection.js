const {Sequelize} = require ("sequelize") // install sequelize 

const connection = new Sequelize(process.env.MY_SQL_URI) // connection from.env file to database

connection.authenticate() //authenticates connection

console.log("DB connection is working")

module.exports = connection // export the connection
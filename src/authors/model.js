const { DataTypes } = require("sequelize") 
const connection = require("../db/connection") 

const Author = connection.define ("Author", { // do not pluralise
    authorName: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    }
})

module.exports = Author
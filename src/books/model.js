const { DataTypes } = require("sequelize") // Take datatypes from Sequelize package

const connection = require("../db/connection") // imports connection file

// define is a sequelize method that allows us to create a model for our database
// a model creates the structure for a table called books in our datatbase (table is made plural by program)
const Book = connection.define ("Book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false, // no books in database can not have a title
        unique: true
    },
    author: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    },
    AuthorId: {
        type: DataTypes.INTEGER
    },
    GenreId: {
    type: DataTypes.INTEGER
    }

})

module.exports = Book; // export information as book
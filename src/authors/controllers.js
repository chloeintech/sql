const { response } = require("express");
const Author = require("./model");
const Book = require("../books/model")

// Adds an author to the database
const addAuthor = async (req, res) => {
    try {
        const author = await Author.create({
            authorName: req.body.authorName
        })

        res.status(201).json({message: "New author added", newAuthor: author}) 

    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
    }

};

// Adds an author to the database
const getAuthorsandBooks = async (req, res) => {
    try {
        const author = await Author.findOne({
            where: {authorName: req.body.author},
            include: Book,
        })

        res.status(201).json({message: "success", author: author}) 

    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
    }

};

module.exports = {
    addAuthor,
    getAuthorsandBooks
}
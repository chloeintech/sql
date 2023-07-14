const { response } = require("express");
const Book = require("./model");
const Author = require("../authors/model") //connects author model

// Adds a book to the DB
const addBook = async (req, res) => {
    try {

        const author = await Author.findOne({
            where: {authorName: req.body.author}
        })

        console.log("!!!!!!")
        console.log (author)
        console.log("!!!!!!")

        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            AuthorId: author.id
        })

        res.status(201).json({message: "success", book: newBook}) 

    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
        console.log(error)
    }

};

// Gets all books
const getBooks = async (req, res) => {
    try {
        const getBooks = await Book.findAll({});
    
        res.status(201).json({message: "Books successfully found", allbooks: getBooks}) 

    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
        console.log(error)
    }

};

// Get books by title
const byTitleBook = async (req, res) => {
    try {
        const byTitleBook = await Book.findOne({
            where: {
                title: req.body.title
            }
        });
    
        res.status(201).json({message: "Book successfully found by title", booksbytitle: byTitleBook}) 

    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
        console.log(error)
    }

};

// Update book by title
const updateBook = async (req, res) => {
    try {
        const updateBook = await Book.update({
            // the new title of the book
            title: req.body.newTitle,
        },
        {
            where:{
                title: req.body.title //swapped with the old title
            }
        })

        res.status(200).json({message: "Book sucessfully updated by title", updateResult: updateBook}) 

    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
        console.log(error)
    }

};

// Deletes a single book by title
const deleteByTitleBook = async (req, res) => {
    try {
        const deleteByTitleBook = await Book.destroy({
            where: {
                title: req.body.title,
            }
    });

        res.status(200).json({message: "Book deleted by title", updateResult: deleteByTitleBook}) 

    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
        console.log(error)
    }

};

// Deletes all books
const deleteAllBooks = async (req, res) => {
    try {
        const deleteAllBooks = await Book.destroy({
            truncate:true
        });

        res.status(200).json({message: "All books deleted.", updateResult: deleteAllBooks}) 

    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
        console.log(error)
    }

};

// Adds an author to the database
const addAuthor = async (req, res) => {
    try {
        const newAuthor = await Book.create({
            author: req.body.author
        })

        res.status(201).json({message: "New author added", book: newAuthor}) 

    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
        console.log(error)
    }

};


module.exports = {
    addBook, 
    getBooks, 
    byTitleBook, 
    updateBook, 
    deleteByTitleBook, 
    deleteAllBooks 
}
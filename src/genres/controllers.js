const { response } = require("express");
const Genre = require("./model");
const Book = require("../books/model")

// Adds an genre to the database
const addGenre = async (req, res) => {
    try {
        const genre = await Genre.create({
            genreName: req.body.genreName
        })

        res.status(201).json({message: "New genre added", newGenre: genre}) 

    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
    }

};

// Finds Genres and associated books
const getAllFromGenre = async (req, res) => {
    try {
        const genre = await Genre.findOne({  
            where: {genreName: req.body.genre},
            include: Book,
        })

        res.status(201).json({message: "success", genre: genre}) 

    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
    }

};

module.exports = {
    addGenre,
    getAllFromGenre
}
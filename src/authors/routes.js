const { Router } = require("express")
const authorRouter = Router() 

const  { addAuthor, getAuthorsandBooks } = require("./controllers")

authorRouter.post("/authors/addauthor", addAuthor)
authorRouter.post("/authors/getAuthorsandBooks", getAuthorsandBooks)

module.exports = authorRouter
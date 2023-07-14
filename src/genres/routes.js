const { Router } = require("express") 
const genreRouter = Router() 

const  { addGenre, getAllFromGenre } = require("./controllers")

genreRouter.post("/genres/addgenre", addGenre)
genreRouter.post("/genres/getallfromgenre", getAllFromGenre)

module.exports = genreRouter
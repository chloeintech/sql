const { Router } = require("express") // Getting the router from express.
const bookRouter = Router() // Assigning the Router to movieRouter.

// These functions are in the controllers, so we need to bring them in here.
const  { addBook, getBooks, byTitleBook, deleteByTitleBook, updateBook, deleteAllBooks } = require("./controllers")

// Directs the request to the appropriate function.
// EXPRESS.REQUEST_TYPE.("ROUTE"),FUNCTION_IN_CONTROLLERS
bookRouter.post("/books/addbook", addBook)
bookRouter.get("/books/getallbooks", getBooks)
bookRouter.get("/books/bytitle", byTitleBook)
bookRouter.put("/books/updatebook", updateBook)
bookRouter.delete("/books/deletebytitle", deleteByTitleBook)
bookRouter.delete("/books/deleteallbooks", deleteAllBooks)




// Exports MovieRouter (function) so it can be used elsewhere (in other pages).
module.exports = bookRouter

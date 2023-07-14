require("dotenv").config(); // initialised dot env

const express= require("express"); // initialises express for the db

const port = process.env.PORT || 5001 ; // adds the port - .env port or 5001 (future proofs code)

const app = express(); // express is what we use to run the server

const Book = require("./books/model"); // connects the model 
const Author = require("./authors/model"); //If new - remember to add
const Genre = require ("./genres/model");

const bookRouter = require("./books/routes"); // imports router
const genreRouter = require("./genres/routes"); //If new - remember to add
const authorRouter = require("./authors/routes"); 

app.use(express.json()); // expect everything is json format (sent and returned)

// Syncs tables and creates tables if not
const syncTables = () => {
    Author.hasMany(Book);
    Book.belongsTo(Author);
    
    Genre.hasMany(Book);
    Book.belongsTo(Genre);

    Book.sync({ alter:true}); // alter:true allows us to alter the structure of a table once it has been created
    Author.sync({ alter:true}); // If new remember to add
    Genre.sync({ alter:true}); 
} 

app.use(bookRouter) // understands how to handle request
app.use(authorRouter) //If new - remember to add
app.use(genreRouter) 

// to run the port
app.listen(port, () => {
    syncTables()// runs when the port runs.
    console.log(`Server is running on port ${port}.`)
})


const express =require("express");
const app= express();
const cors = require("cors");
const pool= require("./db");

//middleware
app.use(cors());
//to get access to request.body to get json data -- useful when building apps that interact with user data
app.use(express.json());

app.listen(5000, ()=>{
    console.log("server has started at port 5000")
});

//ROUTES 

//create a todo

//get all todos 

// get a todo

//update a todo

//delete a todo

const express =require("express");
const app= express();
const cors = require("cors");

//middleware
app.use(cors());
//to get access to request.body to get json data -- useful when building apps that interact with user data
app.use(express.json());

app.listen(5000, ()=>{
    console.log("server has started at port 5000")
});
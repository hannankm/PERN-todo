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

app.post("/todos", async (req,res)=>{
    //await - waits for the function to complete before it continues 
    try{

        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", 
        [description]);

        res.json(newTodo.rows);

    } catch(err){
        console.log(err.message);
    }
})

//get all todos 
    app.get("/todos", async (req,res)=>{
        try{
            
            const allTodos = await pool.query("Select * from todo");
            res.json(allTodos.rows);
        } catch (err){
            console.log(err.message);
        }
    })
// get a todo



app.get("/todos/:id", async (req,res)=>{
    ///todos/:id -- allows urls to be dynamic 
    //will return {id: [specific url extension]} eg /todos/1 => {id: 1}
    try{
        const {id}= req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [id]);

        res.json(todo.rows[0]);
    } catch(err){
        console.log(err.message);
    }
});

//update a todo

app.put("/todos/:id", async (req, res)=>{
    try{
        const {id} =req.params;
        const {description} =req.body;
        const updateTodo= await pool.query(
            "UPDATE todo SET description= $1 WHERE todo_id=$2 ", 
            [description, id]);
        res.json("To Do was updated! ");

    } catch(err){
        console.log(err.message);
    }
});

//delete a todo

app.delete("/todos/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const deleteTodo= await pool.query("DELETE FROM todo WHERE todo_id=$1 ", [id]);

        res.json("Todo was deleted");
    } catch(err){
        console.log(err.message);
    }
});
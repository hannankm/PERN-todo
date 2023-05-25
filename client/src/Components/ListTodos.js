import React, { Fragment, useState, useEffect} from 'react';

//make fetch request each time this component is rendered 
const ListTodos= () => {

    const [todos, setTodos] = useState([]);

    const deleteTodo= async (id)=>{
        try{
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method:"DELETE"
            });
            setTodos(todos.filter(todo=> id!==todo.todo_id))
            

        }catch(err){
            console.log(err.message);
        
    }
    }

    const getTodos= async()=>{
        try{
            const response= await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
            
        } catch(err){
            console.error(err.message);
        }
    }
    useEffect(()=>{
        getTodos();
    }, []);
    return(
        <Fragment>
        {" "}
        <table className='table mt-5 text-center'>
            <thead>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
            </thead>
            <tbody>
                {todos.map(todo=>
                <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td>Edit</td>
                    <td><button 
                    className='btn btn-danger' onClick={()=> deleteTodo(todo.todo_id)}
                    >Delete</button></td>
                </tr>)}
            </tbody>
        </table>
        </Fragment>
    );
}

export default ListTodos;
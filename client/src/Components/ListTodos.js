import React, { Fragment, useState, useEffect} from 'react';

//make fetch request each time this component is rendered 
const ListTodos= () => {

    const [todos, setTodos] = useState([]);

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
                <tr>
                    <td>{todo.description}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>)}
            </tbody>
        </table>
        </Fragment>
    );
}

export default ListTodos;
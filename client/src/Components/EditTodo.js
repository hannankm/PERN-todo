import React, {useState} from "react";

const EditTodo = ({todo})=>{
    const [description, setDescription] = useState(todo.description);

    const updateDescription = async (e)=>{
        e.preventDefault();
        
        try{
            const body ={description};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, { 
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
    });
    window.location="/";
        } catch(err){
            console.log(err.message);
            }
            
        }
    
    return(
        <>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
  Edit
</button>

{/* <!-- The Modal --> */}
<div class="modal" id={`id${todo.todo_id}`} onClick={()=>setDescription(todo.description)}>
  <div class="modal-dialog">
    <div class="modal-content">

      {/* <!-- Modal Header --> */}
      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={()=>setDescription(todo.description)}></button>
      </div>

      {/* <!-- Modal body --> */}
      <div class="modal-body">
        <form>
            <input type='text' value={description} className="form-control" onChange={(e)=>setDescription(e.target.value)}/>
        </form>
      </div>

      {/* <!-- Modal footer --> */}
      <div class="modal-footer">
        <button type="button" className="btn btn-warning " onClick={(e)=> updateDescription(e)} data-bs-dismiss="modal">Edit</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>setDescription(todo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
        
        </>
    );
}

export default EditTodo;
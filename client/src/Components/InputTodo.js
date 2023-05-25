import React, {useState} from 'react';

const InputTodo =()=>{
    const [description, setDescription] = useState(" ");
    const onSubmitForm= async(e)=>{
        // so it doesn't refresh
        e.preventDefault();
        try{
            const body ={description};
            const response = await fetch("http://localhost:5000/todos", {
                //fetch defualt sends get request
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });

            //refresh
            window.location="/";
        } catch(err){
            console.log(err.message);
        }
    }
    return(
        <>
        <h1 className="text-center mt-5" >Pern to do list</h1>
        <form className='d-flex mt-5' onSubmit={onSubmitForm}>
            <input type="text" className='form-control' value={description}
             onChange={(e)=>setDescription(e.target.value)}/>
            <button className='btn btn-success'>Add</button>
        </form>
        </>
    
    );
}
export default InputTodo;


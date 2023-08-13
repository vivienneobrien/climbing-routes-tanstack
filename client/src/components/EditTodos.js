import { useState } from "react"

const EditTodos = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);
    const updateDescription = () => {
        try {
            const body = { description };
            const response = fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" }, // media type (or content type) of the data that is being sent in the request body i.e. json format
                body: JSON.stringify(body)
            });
            setDescription(body)
            window.location = "/";
            
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }
    return <div class="container">
    {/* <!-- Button to Open the Modal --> */}
    <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
      Edit
    </button>
  
    {/* <!-- The Modal --> */}
    <div class="modal" id={`id${todo.todo_id}`}>
      <div class="modal-dialog">
        <div class="modal-content">
        
        
          <div class="modal-header">
            <h4 class="modal-title">Modal Heading</h4>
            <button type="button" class="close" data-dismiss="modal" onClick={()=> setDescription(todo.description)}>&times;</button>
          </div>
          
         
          <div class="modal-body">
           <input type="text" class="form-control" value={description} onChange={e=> setDescription(e.target.value)}/>
          </div>

      
          <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={updateDescription}>Save</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=> setDescription(todo.description)}>Close</button>
          </div>
          
        </div>
      </div>
    </div>
    
  </div>

}

export default EditTodos;
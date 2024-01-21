import { MdDelete } from "react-icons/md";

// added react icon and used it instead of delete button

function ToDoItem({ todoDate, todoName, onDeleteClick }) {

// when there is a click on Delete button you have to return the todoName
    return (
        <div className="container">
            <div className="row my-row">
                <div className="col-6 todoItems" >{todoName}</div>
                <div className="col-4 todoItems">{todoDate}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger my-button" onClick={()=>onDeleteClick(todoName)} > 
                        <MdDelete /> 
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ToDoItem;
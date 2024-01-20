import { useState } from "react"
import { IoIosAddCircle } from "react-icons/io";


function AddToDo({ onNewItem }) {
    
    const [todoName, setTodoName] = useState("") //we have defined initial value as empty
    const [dueDate, setDueDate] = useState("")

    const handleNameChange = (event) => {
        setTodoName(event.target.value)
    }

    const handleDateChange = (event) => {
        setDueDate(event.target.value)
    }

    const handleAddButtonCLick = () => {
        onNewItem(todoName, dueDate)
        setDueDate(""); // after sending the value emptying it to the initial placeholder so that we can store the next value 
        setTodoName(""); // don't write " " as it will pass an empty space
    }

    return (
        <div className="container text-center">
            <div className="row my-row">
                <div className="col-6">
                    <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange} />
                </div>
                <div className="col-4">
                    <input type="date" value={dueDate} onChange={handleDateChange} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success my-button"  onClick={handleAddButtonCLick}>
                    <IoIosAddCircle />

                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddToDo
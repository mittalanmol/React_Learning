import { useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddToDo({ onNewItem }) {
    const todoNameElement = useRef();
    const dueDateElement = useRef()


  const handleAddButtonCLick = () => {
      event.preventDefault() // preventing the default behaviour of submit button (to send data to server)
      const todoName = todoNameElement.current.value;
      const dueDate = dueDateElement.current.value;
      todoNameElement.current.value = "";//Emptying the value (the input text)
      dueDateElement.current.value = "";
      onNewItem(todoName,dueDate)
  };

  return (
    <div className="container text-center">
      <form className="row my-row" onSubmit={handleAddButtonCLick} >
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement}/>
        </div>
        <div className="col-2">
          <button
            type="submit"  // the type of button is submit now
            className="btn btn-success my-button"
          >
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;

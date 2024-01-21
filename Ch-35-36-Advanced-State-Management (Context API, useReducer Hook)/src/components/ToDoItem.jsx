import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/ToDo-Items-Store";

// added react icon and used it instead of delete button

function ToDoItem({ todoDate, todoName }) {
  // when there is a click on Delete button you have to return the todoName

  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6 todoItems">{todoName}</div>
        <div className="col-4 todoItems">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;

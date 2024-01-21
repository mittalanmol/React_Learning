import { useReducer, createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
// these are initial values i.e. initially the array is empty and method is empty
// by defining inside the context we will be able to have the recommendation and access them using Tab

const todoItemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  // if there is no change tou currItem hi new item main store hoke return hojayegi aur agr changes honge to wo niche sort out ho hi jayege

  if (action.type === "NEW_ITEM") {
    // we are passing the currval instead of todoItems
    // Functional Updates: Use to avoid stale values during asynchronous updates.
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
    // agar name ke equal nhi hai to usse store krlo newTodoItems main and delete mt kro as it is filtering out. And if equal hai to delete
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  // jop bhi children pass honge unhe humne return main wrap krdiya hai
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate, // we have passed the same name as argument so no need to write is traditional wise like itemDueDate: itemDueDate
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  // abb ye component bn gye hai to inhe return bhi krna pdega

  return (
    <TodoItemsContext.Provider // Context Provider
      value={{
        // passing the values as an object so we can pass as many at a time
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;

import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
// these are initial values i.e. initially the array is empty and method is empty
// by defining inside the context we will be able to have the recommendation and access them using Tab

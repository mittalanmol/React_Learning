import { createStore } from "redux"; // this is unopmtimized way of using redux to handle store later we will use Redux Toolkit

const INITIAL_VALUE = {
  counter: 0,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { counter: store.counter + Number(action.payload.num) }; // here we are converting the string into Number
  } else if (action.type === "SUBTRACT") {
    return { counter: store.counter - Number(action.payload.num) };
  }
  return store;
};
const counterScore = createStore(counterReducer);

export default counterScore;

// The below give are main steps in using Redux

// 1. phle createStore se ek store bnaliya
// 2. phir store ke andar reducer pass kr diya
// 3. jo store create kia usse Provider ki help se pass ke diya (in the given app we are using store in whole APP component to main main kiy)
// 4. useSelector() ki help se store main se values fetch krli jab bhi store main changes hoge
// 5. useDispatch() ki help se actions and payload pass krdiye

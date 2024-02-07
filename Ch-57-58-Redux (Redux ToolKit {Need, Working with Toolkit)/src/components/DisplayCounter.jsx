import { useSelector } from "react-redux";

function DisplayCounter() {
  const { counterVal } = useSelector((store) => store.counter);
  // the value of counter is inside counterVal so destructring it and we will direct get the value of counteVal without using
  // counter.counterVal as below
  /*
   const counter = useSelector((store) => store.counter);
   const counterVal = counter.counterVal;
 */
  return <p className="lead mb-4">Counter current Value: {counterVal} </p>;
}

export default DisplayCounter;

import React from "react";
import styles from "./Item.module.css";

function Item({ Items, bought, handleBuyButtonClicked }) {
  // we could have used props as an argument here but we are destructuring the array and writing the variable directly inside the {}

  // handleBuyButtonClicked is a function and it has been passed as a prop

  return (
    // here `` we are using this to add two different styles but bootsrap one has higher priority so it take an edge
    <li key={Items} className={`${styles["my-item"]}  list-group-item ${bought && "active"} `}>
      <span className={styles["my-span"]}> {Items} </span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButtonClicked} //Passing Functions via Props and it Enables upward communication from child to parent.
      >
        Buy
      </button>
    </li> // when we are using map we shoud define keys too with the values
  );
}

export default Item;

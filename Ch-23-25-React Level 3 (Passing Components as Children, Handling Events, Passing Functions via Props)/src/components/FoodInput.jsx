import React from 'react'
import styles from "./FoodInput.module.css"
function FoodInput({ handleOnChange }) {



    return (
        <input type="text" placeholder='Enter the food here' className={styles.foodInput}
            onChange={handleOnChange}  //Passing as a Reference
        />
    )
}

export default FoodInput
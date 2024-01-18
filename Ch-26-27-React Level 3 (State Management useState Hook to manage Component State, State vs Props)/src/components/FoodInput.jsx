import React from 'react'
import styles from "./FoodInput.module.css"
function FoodInput({ handleKeyDown }) {



    return (
        <input type="text" placeholder='Enter the food here' className={styles.foodInput}
            onKeyDown={handleKeyDown}  //Passing as a Reference
        />
    )
}

export default FoodInput
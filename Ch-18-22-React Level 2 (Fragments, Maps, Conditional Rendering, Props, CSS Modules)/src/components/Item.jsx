import React from 'react'
import styles from "./Item.module.css"

function Item({ Items }) {  // we could have used props as an argument here but we are destructuring the array and writing the variable directly inside the {}
    return (
        // here `` we are using this to add two different styles but bootsrap one has higher priority so it take an edge
        <li key={Items} className={`${styles['my-item']}  list-group-item`}>
            <span className={styles['my-span']} > {Items}  </span>
        </li> // when we are using map we shoud define keys too with the values
    )
}

export default Item
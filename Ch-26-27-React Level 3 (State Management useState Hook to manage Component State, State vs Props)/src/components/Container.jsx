import React from 'react'
import styles from "./Container.module.css"

function Container(props) {
    return (
        <div className={styles.container} >{props.children}</div>
    )
}

//Container is used to pass children and it is a special prop for passing elements into components.
export default Container
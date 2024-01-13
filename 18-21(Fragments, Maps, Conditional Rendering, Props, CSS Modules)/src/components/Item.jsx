import React from 'react'

function Item({ Items }) {  // we could have used props as an argument here but we are destructuring the array and writing the variable directly inside the {}
    return (
        <li key={Items} className="list-group-item">
            {Items}
        </li> // when we are using map we shoud define keys too with the values
    )
}

export default Item
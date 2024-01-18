import React from 'react'

function ErrorMessage({ foodItems }) {  //We are getting the data through props so no need to declare data here

    return (
        <>{foodItems.length === 0 && <h3>I am still hungry.</h3>}</>  // Conditional Rendering 
    )
}
// Using react fragments to enclose the above jsx 
export default ErrorMessage
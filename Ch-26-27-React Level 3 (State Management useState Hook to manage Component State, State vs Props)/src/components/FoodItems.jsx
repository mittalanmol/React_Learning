import React from 'react'
import Item from './Item'
import { useState } from 'react';

// we could have used props as an argument here but we are destructuring the array and writing the variable directly inside the {}
function FoodItems({ foodItems }) {

    let [activeItems, setActiveItems] = useState([]);

    let onBuyButton = (item, event) => {  // passed item as an argument bcz item is fetching from below map
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    }

    return (
        <ul className="list-group">
            {foodItems.map((item) => {
                return <Item
                    key={item}
                    Items={item}
                    bought={activeItems.includes(item)}
                    handleBuyButtonClicked={(event) => onBuyButton(item,event)}
                ></Item>  // here item is an object so we are passing it inside {} rather than ""
            })}
        </ul >
    )
}

export default FoodItems

/*
React props -: to send data from one component to another.

Props are sent inside the component brackets.
eg. <channel = "item"/> 
1 Always use curly brackets for a array and an object { variableName } to send it as props.
Props can be in any form but passed as a variable.
eg. < username = "anmol"/> 
eg. <Card object = {myobject}/> 
eg. <Card array = {myarray}/> 
*/
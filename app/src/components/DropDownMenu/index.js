import React from 'react'
import Title from './Title'
import './style.scss'

export default function DropDownMenu({background = "#F9F9F9" , color = "#151515"}) {
    return (
        <div className="dropDownMenu" style={{backgroundColor: background}}>
            <div className="container">
                <ul className= "menu" >
                    <Title myTitle="bakery" color={color}/>
                    <Title myTitle="Fruit and vegetables" color={color}/>
                    <Title myTitle="Meat and fish" color={color}/>
                    <Title myTitle="Drinks" color={color}/>
                    <Title myTitle="Kitchen" color={color}/>
                    <Title myTitle="Special nutrition" color={color}/>
                    <Title myTitle="Baby" color={color}/>
                    <Title myTitle="Pharmacy" color={color}/>
                </ul>
            </div>
        </div>
    )
}

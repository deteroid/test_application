import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <h1>I am a {props.name} and my age is {props.age}</h1>
            <p className="p" onClick={props.clicked}>{props.name}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>

    )
}

export default person;
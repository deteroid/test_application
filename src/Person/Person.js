import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1>I am a {props.name} and my age is {props.age}</h1>
            <input type="text" onChange={props.click} value={props.name}></input>
        </div>

    )
}

export default person;
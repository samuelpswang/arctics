import { useState } from 'react'
import './Buttons.css';


function InputBox(props) {

    return (
        <input className="InputBox" placeholder={ props.dummyText }></input>
    );
}

function ActionButton(props) {
    
    return (
        <button className="ActionButton">{ props.buttonName }</button>
    );
}

    );
}

export { InputBox, ActionButton };
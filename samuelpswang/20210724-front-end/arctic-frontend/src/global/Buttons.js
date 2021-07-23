import { useState } from 'react'
import './Buttons.css';

function InputBox(props) {
    const [dummyText] = useState("someInputText");
    
    return (
        <input className="InputBox" placeholder={ props.dummyText }></input>
    );
}

function ActionButton(props) {
    const[buttonName, setButtonName] = useState("buttonName");
    
    return (
       <button className="ActionButton">{ props.buttonName }</button>
    );
}

export { InputBox, ActionButton };
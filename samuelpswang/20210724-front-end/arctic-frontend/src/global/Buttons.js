import { useState } from 'react'
import './Buttons.css';

function InputBox(props) {
    const [dummyText] = useState("someInputText");
    
    return (
        <input className="Input-Box" placeholder={ props.dummyText }></input>
    );
}

function ActionButton(props) {
    const[buttonName, setButtonName] = useState("buttonName");
    
    return (
       <button className="">{ buttonName }</button>
    );
}

export { InputBox, ActionButton };
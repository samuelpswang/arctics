import { useState } from 'react'
import './Buttons.css';

function InputBox() {
    const [dummyText, setDummyText] = useState("someInputText");
    
    return (
        <input placeholder={ dummyText }></input>
    );
}

function ActionButton(props) {
    const[buttonName, setButtonName] = useState("buttonName");
    
    return (
       <button className="">{ buttonName }</button>
    );
}

export { InputBox, ActionButton };
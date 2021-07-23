import { useState } from 'react'
import './Buttons.css';

function ActionButton(props) {
    const[buttonName, setButtonName] = useState("buttonName");
    
    return (
       <button className="">{ buttonName }</button>
    );
}

export { InputBox, ActionButton };
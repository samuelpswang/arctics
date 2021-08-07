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

function ExternalLoginButton(props) {
    
    return (
        <div>
            <button className="ExternalLogInButton">
                <img className="ExternalLogInButtonIcon"src={ props.iconPath } alt={ props.altText } /> 
                { " " + props.buttonName }
            </button>
        </div>
        
    );
}

export { InputBox, ActionButton, ExternalLoginButton };
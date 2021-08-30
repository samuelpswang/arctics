import React, {useState} from 'react';
import '../style.css';
import '../responsive.css'
import LogoImg from '../img/header-arctics-logo.png';


export default function Header () {

    const [email, setEmail] = useState("");

    const resetEmailValue = ()=>{
        document.getElementById("email-input").value="";
        setEmail("");
    }

    const blankValue = (value)=>{
        if (value==="") return true;
        else return false;
    }

    const handleButton = (e)=>{
        if (blankValue(email)) alert("請輸入Email。")
        else{    
            console.log(email);
            alert("提交成功！若之後有新訊息我們會通知您。")
        }
        resetEmailValue();
    }

    return (
        <header id="top">
            <p className="header__slogan">
                <span className="rwd-hide">「</span>
                大學生的
                <span className="header__highlight">30分鐘</span>
                <br></br>
                <span className="header__slogan-break">
                    改變高中生的
                    <span className="header__highlight">30年人生</span>
                    <span className="rwd-hide">」</span>
                </span>
            </p>
		    <img className="header__logo" src={LogoImg} alt="arctics"></img>
		    <h1>大學申請<br className="rwd-show"></br>線上經驗諮詢平台</h1>
		    <p className="header__subtitle">
                一個APP與上百名來自不同科系、
                <br className="rwd-show"></br>
                不同高中生涯的台清交成學生視訊對談！
            </p>
		    <div className="header__form">
			    <a href="#function" className="header__function-button">查看平台功能</a>
			    <br className="rwd-show"></br>
			    <input className="header__email-box" id="email-input" placeholder="留下您的Email，讓我們通知您最新消息" onChange={e=>setEmail(e.target.value.trim())}></input>
			    <button className="header__email-button" id="email-button" onClick={handleButton}>通知我</button>
		    </div>
        </header>
    );
}

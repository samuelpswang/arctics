import React from 'react';
import '../style.css';
import '../responsive.css';
import LogoImg from '../img/header-arctics-logo.png';


// onclick="verifyEmailButton()"
export default function Header () {
    return (
        <header>
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
			    <input className="header__email-box" placeholder="留下您的Email"></input>
			    <button className="header__email-button" id="email-button">通知我</button>
		    </div>
        </header>
    );
}

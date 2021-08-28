import React from 'react';
import '../style.css';
import '../responsive.css';
import logo from '../img/nav-arctics-logo.png';

export default function Nav() {
    return(
        <nav className="rwd-hide">
		    <img className="nav__logo" src={logo} alt="arctics" width="224px" height="41px"></img>
		    <div className="nav__right">
			    <ul className="nav__menu">
				    <li className="nav__menu-item"><a href="#top">首頁</a></li>
				    <li className="nav__menu-item"><a href="#about-us">關於我們</a></li>
				    <li className="nav__menu-item"><a href="#function">產品功能</a></li>
				    <li className="nav__menu-item"><a href="#members">團隊成員</a></li>
				    <li className="nav__menu-item" ><a href="#contact-us">聯絡我們</a></li>
			    </ul>
			    <button className="nav__action-button">註冊 / 登入</button>
		    </div>
	    </nav>
    );
}
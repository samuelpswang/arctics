import React, {useState, useEffect} from 'react';
import '../style.css';
import '../responsive.css';
import logo from '../img/nav-arctics-logo.png';

export default function NavMobile () {
    const [checkedState, setCheckedState] = useState(true);
    useEffect(()=>{
        if (checkedState) document.getElementById("checkbox").checked = !checkedState;
        else document.getElementById("checkbox").checked = checkedState;
    });
    return (
        <nav className="r-nav rwd-show">
		    <img className="r-nav__logo" src={logo} alt="arctics" height="41px"></img>
		    <div className="r-nav__hamburger">
			<input id="checkbox" type="checkbox"></input>
			<span className="r-nav__meat"></span>
			<span className="r-nav__meat"></span>
			<span className="r-nav__meat"></span>
			<ul className="r-nav__menu rwd-show">
				<li className="r-nav__menu-item"><a href="#top" onClick={()=>setCheckedState(!checkedState)}>首頁</a></li>
				<li className="r-nav__menu-item"><a href="#about-us" onClick={()=>setCheckedState(!checkedState)}>關於我們</a></li>
				<li className="r-nav__menu-item"><a href="#function" onClick={()=>setCheckedState(!checkedState)}>產品功能</a></li>
				<li className="r-nav__menu-item"><a href="#members" onClick={()=>setCheckedState(!checkedState)}>團隊成員</a></li>
				<li className="r-nav__menu-item" ><a href="#contact-us" onClick={()=>setCheckedState(!checkedState)}>聯絡我們</a></li>
				<li><button className="r-nav__action-button" onClick={()=>setCheckedState(!checkedState)}>註冊 / 登入</button></li>
			</ul>
		</div>
	    </nav>
    );
}
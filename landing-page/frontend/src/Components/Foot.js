import React from 'react';
import '../style.css';
import '../responsive.css';
import imgFB from '../img/footer-fb-icon.png';
import imgIns from '../img/footer-insta-icon.png';
import imgEmail from '../img/footer-email-icon.png'


export default function Foot () {
    return (
        <footer>
            <p class="footer footer__left">Copyright &copy; 2021 Arctics 平台</p>
		    <p class="footer footer__mid rwd-hide">Made with 💙 in Taiwan</p>
		    <ul class="footer footer__right rwd-hide">
			    <li class="footer__link-item"><img src={imgFB} alt="facbook link" height="24px"></img></li>
			    <li class="footer__link-item"><img src={imgIns} alt="instagram link" height="24px"></img></li>
			    <li class="footer__link-item"><a href="MAILTO:artics.academy666@gmail.com" target="_blank"><img src={imgEmail} alt="email link" height="24px" width="24px"></img></a></li>
		    </ul>
        </footer>
    );
}
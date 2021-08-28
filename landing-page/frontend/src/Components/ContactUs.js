import React from 'react';
import '../style.css';
import '../responsive.css';


// onclick="verifySubmitButton()"
export default function ContactUs () {
    return(
        <section id="contact-us">
            <h2 class="contact-us__heading">聯絡我們</h2>
		    <p class="contact-us__text rwd-show">如果您對我們的產品有興趣，或是想提供您寶貴的意見，我們都非常樂意與您討論。請在左方留下您的大名與電話，以讓我們的行銷團隊聯絡您！</p>
		    <div class="contact-us__content">				
			    <div class="contact-us__form">
				    <input class="contact-us__input contact-us__name-box" placeholder="姓名"></input>
				    <input class="contact-us__input contact-us__no-box" placeholder="聯絡電話"></input>
				    <textarea class="contact-us__input contact-us__message-box" placeholder="您的訊息"></textarea>
				    <button class="contact-us__submit-button" id="submit-button">提交</button>
			    </div>
			    <p class="contact-us__text rwd-hide">如果您對我們的產品有興趣，或是想提供您寶貴的意見，我們都非常樂意與您討論。請在左方留下您的大名與電話，以讓我們的行銷團隊聯絡您！</p>
		    </div>
        </section>
    );
    
}
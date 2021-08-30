import React, {useState} from 'react';
import '../style.css';
import '../responsive.css';


export default function ContactUs () {

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const resetAllValue = ()=>{
		document.getElementsByClassName("contact-us__input")[0].value="";
		document.getElementsByClassName("contact-us__input")[1].value="";
		document.getElementsByClassName("contact-us__input")[2].value="";
		setName("");
		setPhone("");
		setMessage("");
	};

	const handleSubmit = ()=>{
		alert("已提交！");
		const allValue = {
			Name: name,
			Phone_Number: phone,
			Message: message
		};
		console.log(allValue);
		resetAllValue();
	}

    return(
        <section id="contact-us">
            <h2 className="contact-us__heading">聯絡我們</h2>
		    <p className="contact-us__text rwd-show">如果您對我們的產品有興趣，或是想提供您寶貴的意見，我們都非常樂意與您討論。請在左方留下您的大名與電話，以讓我們的行銷團隊聯絡您！</p>
		    <div className="contact-us__content">				
			    <div className="contact-us__form">
				    <input className="contact-us__input contact-us__name-box" placeholder="姓名" onChange={e=>setName(e.target.value)}></input>
				    <input className="contact-us__input contact-us__no-box" placeholder="聯絡電話" onChange={e=>setPhone(e.target.value)}></input>
				    <textarea className="contact-us__input contact-us__message-box" placeholder="您的訊息" onChange={e=>setMessage(e.target.value)}></textarea>
				    <button className="contact-us__submit-button" id="submit-button" onClick={handleSubmit}>提交</button>
			    </div>
			    <p className="contact-us__text rwd-hide">如果您對我們的產品有興趣，或是想提供您寶貴的意見，我們都非常樂意與您討論。請在左方留下您的大名與電話，以讓我們的行銷團隊聯絡您！</p>
		    </div>
        </section>
    );
    
}
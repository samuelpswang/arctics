import './LogIn.css';
import { InputBox, ActionButton, ExternalLoginButton } from '../global/Buttons';
import background from './img/login-background.png';
import google from './img/google-logo.svg';
import facebook from './img/facebook-logo.svg';


function LogInHeader() {
    return (
        <h1>登入</h1>
    );
}

function LogInForm() {

    return (
        <div className="LogInForm">
            <p className="Legend">帳號 (Email地址或是手機號碼)</p>
            <InputBox dummyText="johnnyappleseed@gmail.com" />
            <p className="Legend">密碼</p>
            <InputBox dummyText="⬤⬤⬤⬤⬤⬤⬤⬤" />
            <p className="LogInLine"><span className="LogInText">還不是會員？<a>按此註冊</a></span><div className="LogInActionButton"><ActionButton buttonName="登入" /></div></p> 
            <p className="OrLine"><div className="Separator"></div><span className="OrText">或是</span><div className="Separator"></div></p>
            <ExternalLoginButton buttonName="使用Google登入" iconPath={ google } altText="Google Logo" />
            <ExternalLoginButton buttonName="使用Facebook登入" iconPath={ facebook } altText="Facebook Logo" />
        </div>
    );
}

function LogIn() {
    return (
        <>
            <div className="NavBarPlaceholder"></div>
            <LogInHeader />
            <LogInForm />
            <img className="Background" src={ background } alt="" />
            <div className="FooterPlaceholder"></div>
        </>
    );
}

export default LogIn;
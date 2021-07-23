import './LogIn.css';
import { InputBox, ActionButton } from '../global/Buttons';
import background from './img/login-background.png';


function LogInHeader() {
    return (
        <h1>登入</h1>
    );
}

function LogInForm() {
    return (
        <div className="LogInForm">
            <p>帳號 (Email地址或是手機號碼)</p>
            <InputBox />
            <p>密碼</p>
            <InputBox />
            <p>還不是會員？按此註冊</p>
            <ActionButton />
            <p>或是</p>
            <p>使用Google登入</p>
            <p>使用Facebook登入</p>
        </div>
    );
}

function LogIn() {
    return (
        <>
            <LogInHeader />
            <LogInForm />
            <img src={ background } alt="" />
        </>
    );
}

export default LogIn;
import './../CSS/LoginMenu.css'
import { useState } from 'react';


export default function LoginMenu(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function handleChangeEmail(e){
        setEmail(e.target.value);
    }

    function handleChangePassword(e){
        setPassword(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        alert(email + "trying to log in with "+ password);
    }

    return (
        <form className="loginmenu" onSubmit={handleSubmit}>
            <div className="loginmenu--heading">
                Login
            </div>
            <div className="loginmenu--desc" >
                Sign in to Continue
            </div>
            <div className="loginmenu--text">
                Email 
            </div>
            <input className="loginmenu--text-input" onChange={handleChangeEmail} />
            <div className="loginmenu--text">
                Password 
            </div>
            <input className="loginmenu--text-input" onChange={handleChangePassword} />
            <button className='submitBtn' type='submit'> LOGIN  </button>
            
        </form>
    )
}
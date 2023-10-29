import './../CSS/LoginMenu.css'
import { useState } from 'react';
import { useAuth } from '../../Auth/authProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginMenu(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { setToken } = useAuth();
    const navigate = useNavigate();

    function handleChangeEmail(e){
        setEmail(e.target.value);
    }

    function handleChangePassword(e){
        setPassword(e.target.value);
    }


    function handleSuccessLogin(tk){
        setToken(tk);
        navigate("/home", { replace: true });
    };


    function handleSubmit(e){
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        };
        console.log(userData);
        axios.post("https://nitclub-backend.arshiyahafis.repl.co/login/", userData,{
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then((response) => {
            console.log(response.status, response.data.token);
            handleSuccessLogin(response.data.token);
        });
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
            <input type="password" className="loginmenu--text-input" onChange={handleChangePassword} />

            <button className='submitBtn' type='submit'> LOGIN  </button>
            
        </form>
    )
}
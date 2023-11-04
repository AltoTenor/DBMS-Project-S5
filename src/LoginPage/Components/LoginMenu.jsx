import './../CSS/LoginMenu.css'
import { useState } from 'react';
import { useAuth } from '../../Auth/authProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginMenu(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { setToken , setIsAdmin } = useAuth();
    const navigate = useNavigate();

    function handleChangeEmail(e){
        setEmail(e.target.value);
    }

    function handleChangePassword(e){
        setPassword(e.target.value);
    }


    function handleSuccessLogin(tk,isAdmin){
        setToken(tk);
        setIsAdmin(isAdmin);
        // console.log(tk);
        if (!isAdmin) navigate("/dashboard", { replace: true });
        else navigate("/admin-dashboard", { replace: true });
    };


    function handleSubmit(e){
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        };
        console.log(userData);
        axios.post("https://nitclub-backend--arshiyahafis.repl.co/login/", userData,{
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then((response) => {
            console.log(response.status, response.data.user.isClubAdmin);
            handleSuccessLogin(response.data.token,response.data.user.isClubAdmin);
        }
        ,(r)=>{
            console.log(r);
            alert("Invalid Login");
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
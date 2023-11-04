import "./../CSS/CSSRegForm.css"
import { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const baseURL = "??";


export default function AdminRegForm(){

    const navigate = useNavigate();


    const [details,setDetails] = useState(
        {
            "club_name":"",
            "club_id":"",
            "club_fa":"",
            "club_admin":"",
            "club_logo":"",
            "club_opening_balance": 0,
        }
    )
    

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDetails(obj => ({...obj, [name]: value}))
    }


    function handleSubmit(e){
        e.preventDefault();
        const admin_data = {
            ...details,
            club_opening_balance : parseInt(details.club_opening_balance), 
        }
        if ( admin_data.club_logo == ""){
            delete admin_data.club_logo;
        }
        console.log(admin_data);
        axios.post("https://nitclub-backend.arshiyahafis.repl.co/clubs/", admin_data,{
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log(response.status);
            navigate("/login", { replace: true });
        }
        ,(r)=>{
            console.log(r);
            alert("Invalid Register");
        });
    }

    return (
        <form className="InputFields-White">
            <div className="regmenu--heading-white">
                Register a Club
            </div>
            <div className="regmenu--desc" >
                If you are an admin you can register your club to schedule events.
            </div>

            <label className="regmenu--text" >Club Name</label>
            <input 
                className="regmenu--text-input"
                type="text" 
                name="club_name" 
                value={details.club_name || ""} 
                onChange={handleChange}
            />

            <label className="regmenu--text" >Club ID</label>
            <input 
                className="regmenu--text-input"
                type="text" 
                name="club_id" 
                value={details.club_id || ""} 
                onChange={handleChange}
            />



            <label className="regmenu--text" >Club Faculty Advisor</label>
            <input 
                className="regmenu--text-input"
                type="text" 
                name="club_fa" 
                value={details.club_fa || ""} 
                onChange={handleChange}
            />

            <label className="regmenu--text" >Club Admin ID</label>
            <input 
                className="regmenu--text-input"
                type="text" 
                name="club_admin" 
                value={details.club_admin || ""} 
                onChange={handleChange}
            />

            <label className="regmenu--text" >Club Logo</label>
            <input 
                className="regmenu--file-input"
                type="file" 
                name="club_logo" 
                value={details.club_logo || ""} 
                onChange={handleChange}
            />

            <label className="regmenu--text" >Club Opening Balance </label>
            <input 
                className="regmenu--text-input"
                type="number" 
                name="club_opening_balance" 
                value={details.club_opening_balance || ""} 
                onChange={handleChange}
            />
            
            <div className="btndiv">
                <button className='submitBtn' type='submit' onClick={handleSubmit}> REGISTER  </button>
            </div>
        </form>
    )
}
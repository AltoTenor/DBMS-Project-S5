import "./../CSS/CSSRegForm.css"
import { useState,useEffect } from 'react';
import axios from "axios";

// const baseURL = "??";


export default function StudentRegForm(){
    const [details,setDetails] = useState(
        {
            "CName":"",
            "ClubID":"",
            "ClubFA":"",
            "ClubAdminID":"",
            "ClubLogo":"",
            "ClubOB": 0,
        }
    )

    // useEffect(() => {
    //     axios.get(baseURL)
    //     .then((response) => {
    //       setDetails(response.data);
    //     });
    // }, []);

    // function createPost() {
    //     axios
    //     .post(baseURL, details )
    //     .then((response) => {
    //     setDetails(response.data);
    //     });
    // }
    

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDetails(obj => ({...obj, [name]: value}))
    }


    function handleSubmit(e){
        e.preventDefault();
        console.log(details);
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
                name="CName" 
                value={details.CName || ""} 
                onChange={handleChange}
            />

            <label className="regmenu--text" >Club ID</label>
            <input 
                className="regmenu--text-input"
                type="text" 
                name="ClubID" 
                value={details.ClubID || ""} 
                onChange={handleChange}
            />



            <label className="regmenu--text" >Club Faculty Advisor</label>
            <input 
                className="regmenu--text-input"
                type="text" 
                name="ClubFA" 
                value={details.ClubFA || ""} 
                onChange={handleChange}
            />

            <label className="regmenu--text" >Club Admin ID</label>
            <input 
                className="regmenu--text-input"
                type="text" 
                name="ClubAdminID" 
                value={details.ClubAdminID || ""} 
                onChange={handleChange}
            />

            <label className="regmenu--text" >Club Logo</label>
            <input 
                className="regmenu--file-input"
                type="file" 
                name="ClubLogo" 
                value={details.ClubLogo || ""} 
                onChange={handleChange}
            />

            <label className="regmenu--text" >Club Opening Balance </label>
            <input 
                className="regmenu--text-input"
                type="number" 
                name="ClubOB" 
                value={details.ClubOB || ""} 
                onChange={handleChange}
            />
            
            <div className="btndiv">
                <button className='submitBtn' type='submit' onClick={handleSubmit}> REGISTER  </button>
            </div>
        </form>
    )
}
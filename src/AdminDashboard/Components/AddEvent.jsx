import './../CSS/AddEvent.css'
import CardTwo from './Card2'
import testimage3 from "../../assets/kp.jpg"
import testimage1 from "../../assets/bg1.jpg"
import testimage2 from "../../assets/fossmeet.jpeg"
import testimage4 from "../../assets/hk.jpg"
import testimage5 from "../../assets/fossmeet.jpeg"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useAuth } from '../../Auth/authProvider'



function BlockOfEvents(){

    const { token } = useAuth();

    const [event,setEvent] = useState({
        event_name:"",
        event_date:"",
        event_time:"",
        event_venue:"",
        event_budget:"",
        event_cost:"",
        event_profit:"",
        event_regfee:"",
        event_image:"",
        event_profit:"",
    })

    function handleChange(e){
        // console.log(e.target.name);
        setEvent(
            {
                ...event,
                [e.target.name]:e.target.value
            }
        )
    }

    function handleSubmit(e){
        e.preventDefault();

        axios.get("https://nitclub-backend--arshiyahafis.repl.co/profile/"
        ,{
            headers:{"Authorization" : `token ${token}`}
        }
        )
        .then(student=>{
            // console.log(student.data.clubs[0].club_id);
            axios.post("https://nitclub-backend--arshiyahafis.repl.co/events/",
            {
                event_club: student.data.clubs[0].club_id,
                event_name: event.event_name,
                event_date: "2023-12-05",
                event_time: "14:00:00",
                event_venue: event.event_venue,
                event_regfee: event.event_regfee,
            },
            {
                headers:{"Authorization" : `token ${token}`}
            }
            )
            .then(r=>{console.log(r);window.location.reload()})
            .catch(e=>console.log(e));
        })


        
    }

    function isDateFormat(inputString) {
        // Define a regular expression pattern for the "DD/MM/YYYY" format
        const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
      
        // Use the test() method of the regular expression to check if the inputString matches the pattern
        return datePattern.test(inputString);
    }

    function isMinLength(str){
        return (str.length>=4);
    }

    function isXPMAM(str) {
        // Define a regular expression pattern to match the format "X AM" or "X PM" where X is a number from 1 to 12
        const regexPattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;

        // Use the test method to check if the inputString matches the pattern
        return regexPattern.test(str);
    }

    return( 
        <form className="white-add" >
            <div className="eventadd-box">
                <label className="eventadd-label" htmlFor='Ename'> Event Name</label>
                <input 
                    type="text" 
                    className={`eventadd-input ${(event.event_name==="")?"":(isMinLength(event.event_name))?"eventadd-input-dirty":"eventadd-input-invalid"}  `}
                    name='event_name' 
                     id="Ename" 
                      onChange={handleChange} 
                      value = {event.event_name} 
                />
            </div>
            <div className="eventadd-box">
                <label className="eventadd-label" htmlFor='Edate'>Event Date (Eg: DD/MM/YYYY) </label>
                <input 
                    type="text" 
                    className={`eventadd-input ${(event.event_date==="")?"":(isDateFormat(event.event_date))?"eventadd-input-dirty":"eventadd-input-invalid"}  `}
                    name='event_date' 
                    id="Edate" 
                    onChange={handleChange} 
                    value = {event.event_date} 
            />
            </div>
            <div className="eventadd-box">
                <label className="eventadd-label" htmlFor='Etime'>Event Time (Eg: 14:00:00) </label>
                <input 
                    className={`eventadd-input ${(event.event_time==="")?"":(isXPMAM(event.event_time))?"eventadd-input-dirty":"eventadd-input-invalid"}  `}
                    type="text" 
                    name='event_time' 
                    id="Etime" 
                    onChange={handleChange} 
                    value = {event.event_time} 
            />
            </div>
            <div className="eventadd-box">
                <label className="eventadd-label" htmlFor='Evenue'>Event Venue</label>
                <input 
                    type="text" 
                    name='event_venue' 
                    className={`eventadd-input ${(event.event_venue==="")?"":(isMinLength(event.event_venue))?"eventadd-input-dirty":"eventadd-input-invalid"}  `}
                    id="Evenue" 
                    onChange={handleChange}  
                    value = {event.event_venue} 
            />
            </div>
            <div className="eventadd-box">
                <label className="eventadd-label" htmlFor='ERegFee'> Event Reg Fee</label>
                <input 
                    type="text" 
                    className={`eventadd-input ${(event.event_regfee==="")?"":(!isNaN(event.event_regfee))?"eventadd-input-dirty":"eventadd-input-invalid"}  `}
                    name='event_regfee' 
                     id="ERegFee" 
                      onChange={handleChange} 
                      value = {event.event_regfee} 
                />
            </div>

            <button className='addEventBtn' type='submit'  onClick={handleSubmit}> CREATE EVENT  </button>
        </form>)
}


export default function AddEvent(){
    

    return(
        <div className="Events">
            <div className="events-heading">
                Add an Event 
            </div>
            <div className="events-desc">
                Prepare for an unforgettable event filled with entertainment, networking, and more!
            </div>
            <BlockOfEvents />
        </div>
    )
}

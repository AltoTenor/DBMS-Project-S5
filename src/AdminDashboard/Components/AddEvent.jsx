import './../CSS/AddEvent.css'
import CardTwo from './Card2'
import testimage3 from "../../assets/kp.jpg"
import testimage1 from "../../assets/bg1.jpg"
import testimage2 from "../../assets/fossmeet.jpeg"
import testimage4 from "../../assets/hk.jpg"
import testimage5 from "../../assets/fossmeet.jpeg"
import { useState } from 'react'



function BlockOfEvents(){



    const [event,setEvent] = useState({
        event_name:"",
        event_date:"",
        event_time:"",
        event_venue:"",
        event_budget:"",
        event_cost:"",
    })

    function handleChange(e){
        console.log(e.target.name);
        setEvent(
            {
                ...event,
                [e.target.name]:e.target.value
            }
        )
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(event);
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
        const pattern = /^(1[0-2]|[1-9]) (AM|PM)$/;

        // Use the test method to check if the string matches the pattern
        return pattern.test(str);
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
                <label className="eventadd-label" htmlFor='Etime'>Event Time (Eg: 2 PM) </label>
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
                <label className="eventadd-label">Event Budget (in ₹) </label>
                <input 
                    type="text" 
                    className={`eventadd-input ${(event.event_budget==="")?"":(!isNaN(event.event_budget))?"eventadd-input-dirty":"eventadd-input-invalid"}  `}
                    name='event_budget' 
                    id="Ebudget" 
                    onChange={handleChange} 
                    value = {event.event_budget} 
            />
            </div>
            <div className="eventadd-box">
                <label className="eventadd-label">Event Cost (in ₹)</label> 
                <input 
                    type="text" 
                    className={`eventadd-input ${(event.event_cost==="")?"":(!isNaN(event.event_cost))?"eventadd-input-dirty":"eventadd-input-invalid"}  `}
                    name='event_cost' 
                    id="Ecost" 
                    onChange={handleChange} 
                    value = {event.event_cost} 
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

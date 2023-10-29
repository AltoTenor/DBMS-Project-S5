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


    return( 
        <form className="white-add" >
            <div className="eventadd-box">
                <label className="eventadd-label" htmlFor='Ename'>Event Name</label>
                <input 
                    type="text" 
                    className='eventadd-input' 
                    name='event_name' 
                     id="Ename" 
                      onChange={handleChange} 
                      value = {event.event_name} 
                />
            </div>
            <div className="eventadd-box">
                <label className="eventadd-label" htmlFor='Edate'>Event Date</label>
                <input 
                    type="text" 
                    className='eventadd-input' 
                    name='event_date' 
                    id="Edate" 
                    onChange={handleChange} 
                    value = {event.event_date} 
            />
            </div>
            <div className="eventadd-box">
                <label className="eventadd-label" htmlFor='Etime'>Event Time</label>
                <input 
                    type="text" 
                    className='eventadd-input' 
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
                    className='eventadd-input' 
                    name='event_venue' 
                    id="Evenue" 
                    onChange={handleChange}  
                    value = {event.event_venue} 
            />
            </div>
            <div className="eventadd-box">
                <label className="eventadd-label">Event Budget </label>
                <input 
                    type="text" 
                    className='eventadd-input' 
                    name='event_budget' 
                    id="Ebudget" 
                    onChange={handleChange} 
                    value = {event.event_budget} 
            />
            </div>
            <div className="eventadd-box">
                <label className="eventadd-label">Event Cost</label> 
                <input 
                    type="text" 
                    className='eventadd-input' 
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

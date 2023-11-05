import './../CSS/AddEvent.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../Auth/authProvider'



function BlockOfEvents({EventNo}){

    const {token} = useAuth();
    
    const [event,setEvent] = useState({
        event_id:"",
        event_date:"",
        event_name:"",
        event_time:"",
        event_club:"",
        event_venue:"",
        event_budget:"",
        event_cost:"",
        event_profit:"",
        event_regfee:"",
        event_image:"",
    })


    //Get Event Record
    useEffect( ()=>{
        axios.get( `https://nitclub-backend--arshiyahafis.repl.co/events/${EventNo}/`,{
            headers:{"Authorization" : `token ${token}`}
        })
        .then(r=>{
            console.log(r);
            setEvent({
                ...r.data,
                "event_image":"",
            })
        })
    }
    ,[])
    

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
        console.log(event);

        const formdata = new FormData();
        console.log(event.event_image);
        if (event.event_image!==""){
            formdata.append("event_image",
                event.event_image,event.event_image.name
            );
        }
        formdata.append("event_name",event.event_name);
        formdata.append("event_budget",event.event_budget);
        formdata.append("event_cost",event.event_cost);
        formdata.append("event_club",event.event_club);
        formdata.append("event_date",event.event_date);
        formdata.append("event_time",event.event_time);
        formdata.append("event_venue",event.event_venue);
        formdata.append("event_regfee",event.event_regfee);
        axios.put( `https://nitclub-backend--arshiyahafis.repl.co/events/${EventNo}/`,formdata,{
            headers:{"Authorization" : `token ${token}`}
        })
        .then(r=>{
            console.log(r);
            setTimeout(()=>{
                window.location.reload();
            },500)

        })
        .catch(e=>console.log(e))
    }

    function isDateFormat(inputString) {
        // Define a regular expression pattern for the "DD/MM/YYYY" format
        const datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

      
        // Use the test() method of the regular expression to check if the inputString matches the pattern
        return datePattern.test(inputString);
    }

    function isMinLength(str){
        return (str.length>=4);
    }

    function isXPMAM(str) {
        // Define a regular expression pattern to match the format "X AM" or "X PM" where X is a number from 1 to 12
        const datePattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
      
        // Use the test() method of the regular expression to check if the inputString matches the pattern
        return datePattern.test(str);
    }

    function handleImageChange(e){
        console.log(e.target.files[0]);
        setEvent({
            ...event,
            "event_image":e.target.files[0],
            }
        )
    }

    return( 
        <form className="white-add" >
            <div className="eventadd-box">
                <label className="eventadd-label" htmlFor='Ename'>Event Name </label>
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
            {/* <div className="eventadd-box">
                <label className="eventadd-label" htmlFor='Eprofit'>Event Profit (in ₹)</label> 
                <input 
                    type="text" 
                    className={`eventadd-input ${(event.event_profit==="")?"":(!isNaN(event.event_profit))?"eventadd-input-dirty":"eventadd-input-invalid"}  `}
                    name='event_profit' 
                    id="Eprofit" 
                    onChange={handleChange} 
                    value = {event.event_profit} 
            />
            </div> */}
            <div className="eventadd-box">
                <label className="eventadd-label" htmlFor='Eregfee'>Event Reg Fee (in ₹)</label> 
                <input 
                    type="text" 
                    className={`eventadd-input ${(event.event_regfee==="")?"":(!isNaN(event.event_regfee))?"eventadd-input-dirty":"eventadd-input-invalid"}  `}
                    name='event_regfee' 
                    id="Eregfee" 
                    onChange={handleChange} 
                    value = {event.event_regfee} 
            />
            </div>
            <div className="eventadd-box">
                <label className="eventadd-label" htmlFor='EImage'>Event Image</label> 
                <input 
                    type="file" 
                    className={`eventadd-input`}
                    name='event_regfee' 
                    id="EImage" 
                    onChange={handleImageChange} 
            />
            </div>
            <button className='addEventBtn' type='submit'  onClick={handleSubmit}> UPDATE EVENT  </button>
        </form>)
}


export default function UpdateEvent({EventNo}){
    

    return(
        <div className="Events">
            <div className="events-heading">
                Update Event 
            </div>
            <div className="events-desc">
                Want to make some updates?
            </div>
            <BlockOfEvents EventNo={EventNo}/>
        </div>
    )
}

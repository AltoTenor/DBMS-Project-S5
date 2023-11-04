import './../CSS/Events.css'
import CardTwo from './Card2'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useAuth } from '../../Auth/authProvider'



function BlockOfEvents(){
    // console.log(arr);

    const [regClick,setRegClick] = useState(0);
    const { token } = useAuth();
    const [arr,setArr] = useState([]);
    const [objs,setObjs] = useState({});


    


    useEffect( ()=>{
        // console.log(token);
        axios.get("https://nitclub-backend--arshiyahafis.repl.co/upcoming-events/"
        ,{
            headers:{"Authorization" : `token ${token}`}
        }
        )
        .then( (r)=>{
            // console.log(r);
            setArr(r.data.map( (obj)=>({
                    Id:obj.event_id,
                    Club: obj.event_club,
                    EventName: obj.event_name,
                    Date: obj.event_date,
                    Time: obj.event_time,
                    Reg_Fee: obj.event_regfee,
                    Venue: obj.event_venue,
                    Image: obj.event_image,
                })
            ))
        } )
        .catch((e)=>{
            console.log(e);
        }) },[]
    )

    function handleRegistration(i){
        setRegClick(i);


        axios.get("https://nitclub-backend--arshiyahafis.repl.co/profile/"
        ,{
            headers:{"Authorization" : `token ${token}`}
        }
        )
        .then( (r)=>{
            console.log(r.data.roll_number);
            axios.post("https://nitclub-backend--arshiyahafis.repl.co/registrations/",
                {
                    event_id:arr[i].Id,
                    student_id:r.data.roll_number,
                },
                {
                    headers:{"Authorization" : `token ${token}`}
                }
            ).then(r=>{
                console.log(r.status);
                alert("Registered");
            })
            .catch( e => {alert("Already Registered")})
        } )
        .catch((e)=>{
            console.log(e);
        }) 

        
    }


    return (
        <div className="white">
            <div className="col1">
                { arr.map( (x,i) => (i%4==0)&&<CardTwo events={arr[i]} paid={false} handleClick = {handleRegistration} key={i} id={i}/> ) }
            </div>
            <div className="col2">
                { arr.map( (x,i) => (i%4==1)&&<CardTwo events={arr[i]} paid={false} handleClick = {handleRegistration} key={i}  id={i} /> ) }
            </div>
            <div className="col3">
                { arr.map( (x,i) => (i%4==2)&&<CardTwo events={arr[i]} paid={false} handleClick = {handleRegistration} key={i} id={i} /> ) }
            </div>
            <div className="col4">
                { arr.map( (x,i) => (i%4==3)&&<CardTwo events={arr[i]} paid={false} handleClick = {handleRegistration} key={i} id={i} /> ) }
            </div>
        </div>
    )
}


export default function Events(){

    

    return(
        <div className="Events">
            <div className="events-heading">
                Upcoming Events 
            </div>
            <div className="events-desc">
                Events Coming soon
            </div>
            <BlockOfEvents/>
        </div>
    )
}

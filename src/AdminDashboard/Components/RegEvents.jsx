import './../CSS/Events.css'
import CardTwo from './Card2'
import { useAuth } from '../../Auth/authProvider'
import axios from 'axios'
import { useEffect,useState } from 'react'


function BlockOfEvents(){

    const { token } = useAuth();
    const [ arr,setArr ] = useState([]);

    useEffect( ()=>{
        // console.log(token);
        axios.get("https://nitclub-backend--arshiyahafis.repl.co/registered-events/"
        ,{
            headers:{"Authorization" : `token ${token}`}
        }
        )
        .then( (r)=>{
            // console.log(r);
            
            setArr(r.data.map( (obj)=>({
                    Club: obj.event_club,
                    EventName: obj.event_name,
                    Date: obj.event_date,
                    Time: obj.event_time,
                    Reg_Fee: obj.event_regfee,
                    Venue: obj.event_venue,
                    Image: obj.event_image,
                    }
                )
            ))

        } )
        .catch((e)=>{
            console.log(e);
        }) },[]
    )
    
    let width = window.innerWidth;
    if (width>768) {
    return (<div className="white">
                <div className="col1">
                { arr.map( (x,i) => (i%4==0) && <CardTwo events={arr[i]} paid={true} key={i} /> ) }
                </div>
                <div className="col2">
                { arr.map( (x,i) => (i%4==1) && <CardTwo events={arr[i]} paid={true} key={i} /> ) }
                </div>
                <div className="col3">
                { arr.map( (x,i) => (i%4==2) && <CardTwo events={arr[i]} paid={true} key={i} /> ) }
                </div>
                <div className="col4">
                { arr.map( (x,i) => (i%4==3) && <CardTwo events={arr[i]} paid={true} key={i} /> ) }
                </div>
            </div>
        )}
    else{
        return(
            <div className="white">
                <div className="col1">
                { arr.map( (x,i) => <CardTwo events={arr[i]} paid={true} key={i} /> ) }
                </div>
            </div>
        )
    }
}

export default function Events(){

    return(
        <div className="Events">
            <div className="events-heading">
                Registered Events 
            </div>
            <div className="events-desc">
                Events that you have already registered in
            </div>
            <BlockOfEvents/>
        </div>
    )
}

import './../CSS/Events.css'
import CardThree from './Card3'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useAuth } from '../../Auth/authProvider'
import Confirmation from './Confirmation';



function BlockOfEvents({setTabNumber,warning,setWarning,handleYes,setRegDeleteI,regDeleteI,arr,setArr,setEventNo}){
    // console.log(arr);

    const { token } = useAuth();
    const [clubID,setClubID] = useState([]);

    useEffect( ()=>{
        axios.get( `https://nitclub-backend--arshiyahafis.repl.co/profile/`,{
            headers:{"Authorization" : `token ${token}`}
        })
        .then(r=>{
            // console.log(r.data.clubs[0].club_id);
            setClubID(r.data.clubs[0].club_id);
        })
    }
    ,[])


    useEffect( ()=>{
        if (clubID!=""){
            axios.get(`https://nitclub-backend--arshiyahafis.repl.co/club/${clubID}/events`
            ,{
                headers:{"Authorization" : `token ${token}`}
            }
            )
            .then( (r)=>{
                // console.log(r.data);
                setArr(r.data.map( (obj)=>({
                        Id:obj.event_id,
                        Club: obj.event_club,
                        EventName: obj.event_name,
                        Date: obj.event_date,
                        Time: obj.event_time,
                        Reg_Fee: obj.event_regfee,
                        Venue: obj.event_venue,
                        Image: obj.event_image,
                        NumRegtd: obj.event_students
                    })
                ))
            } )
            .catch((e)=>{
                console.log(e);
            }) 
        } },[clubID]
    )

    function handleDelete(i){
        setWarning(true);
        setRegDeleteI(i);
    }

    function handleUpdate(i){
        setEventNo(arr[i].Id);
        setTabNumber(5);
    }

    return (
        <div className="white">
            <div className="col1">
                { arr.map( (x,i) => (i%4==0)&&<CardThree events={arr[i]} paid={false} handleDelete={handleDelete} handleUpdate={handleUpdate} key={i} id={i}/> ) }
            </div>
            <div className="col2">
                { arr.map( (x,i) => (i%4==1)&&<CardThree events={arr[i]} paid={false} handleDelete={handleDelete} handleUpdate={handleUpdate} key={i}  id={i} /> ) }
            </div>
            <div className="col3">
                { arr.map( (x,i) => (i%4==2)&&<CardThree events={arr[i]} paid={false} handleDelete={handleDelete} handleUpdate={handleUpdate} key={i} id={i} /> ) }
            </div>
            <div className="col4">
                { arr.map( (x,i) => (i%4==3)&&<CardThree events={arr[i]} paid={false} handleDelete={handleDelete} handleUpdate={handleUpdate} key={i} id={i} /> ) }
            </div>
        </div>
    )
}


export default function ClubEvents({setTabNumber,setEventNo,EventNo}){

    const [regDeleteI,setRegDeleteI] = useState(0);
    const [arr,setArr] = useState([]);
    const [change,setChanged] = useState([]);
    const {token} = useAuth();
    const [warning,setWarning] = useState(false);

    function handleYes(){
        console.log(arr[regDeleteI].Id);
        console.log("deleting "+regDeleteI);
        axios.delete(`https://nitclub-backend--arshiyahafis.repl.co/events/${arr[regDeleteI].Id}`
        ,{
            headers:{"Authorization" : `token ${token}`}
        }
        )
        .then( (r)=>console.log(r))
        .catch((e)=>console.log(e));
        setWarning(false);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
    

    return(
        <div className="Events">
            <div className="events-heading">
                Club Events 
            </div>
            <div className="events-desc">
                Events Being Conducted by your club !
            </div>
            <BlockOfEvents 
                setTabNumber={setTabNumber} 
                warning={warning} 
                setWarning={setWarning} 
                handleYes={handleYes} 
                regDeleteI={regDeleteI} 
                setRegDeleteI={setRegDeleteI}
                arr={arr}
                setEventNo = {setEventNo}
                setArr={setArr}
                change={change}
            />
            {warning && 
                <Confirmation 
                handleYes={handleYes} 
                handleNo={()=>setWarning(false)} 
            />}
        </div>
    )
}

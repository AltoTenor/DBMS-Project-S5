import '../CSS/Card2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faCircleCheck,faIdCard,faMoneyCheckDollar,faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function Card2({events,paid,id,handleUpdate,handleDelete}){


    let colors = ["clubname-green","clubname-purple","clubname-red","clubname-blue"]
    
    const [isHovered,setIsHovered] = useState(false);
    const [color,setColor] = useState(0);

    useEffect(()=>{
        setColor(Math.floor(Math.random() * 4));
    },[])

    return (
        <div className={events.Image?"card card-w-img":"card card-wo-img"} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <div className={"clubname " + colors[color]}>{`Registered: ${events.NumRegtd}`}</div>
            <img className="eventimage" src = {events.Image}/>
            <div className="eventname">{events.EventName||""}</div>
            <div className="eventvenue"><FontAwesomeIcon icon={faLocationDot} /> &nbsp;{events.Venue||""} </div>
            <div className="eventtime">{events.Date+" @ "+events.Time||""}</div>
            {isHovered&&<div className="update_delete_box">
                <div className="update-btn" onClick={()=>handleUpdate(id)}>
                    <FontAwesomeIcon icon={faPenToSquare} size='lg' />
                </div>
                <div className="delete-btn" onClick={()=>handleDelete(id)}>
                    <FontAwesomeIcon icon={faTrashCan} size='lg' />
                </div>
            </div>}
        </div>
    )
}
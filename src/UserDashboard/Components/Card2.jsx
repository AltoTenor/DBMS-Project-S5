import '../CSS/Card2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faCircleCheck,faIdCard,faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'

export default function Card2({events,paid,id,handleClick}){


    let colors = ["clubname-green","clubname-purple","clubname-red","clubname-blue"]

    return (
        <div className={events.Image?"card card-w-img":"card card-wo-img"}>
            <div className={"clubname " + colors[Math.floor(Math.random() * 4)]}>{events.Club}</div>
            <img className="eventimage" src = {events.Image}/>
            <div className="eventname">{events.EventName||""}</div>
            <div className="eventvenue"><FontAwesomeIcon icon={faLocationDot} /> &nbsp;{events.Venue||""}</div>
            <div className="eventtime">{events.Date+" @ "+events.Time||""}</div>
            <div className={paid?"eventregfee-paid":"eventregfee-notpaid"} onClick={()=>{!paid&&handleClick(id)}}>
                {paid?
                    <FontAwesomeIcon icon={faCircleCheck} style={{color: "#34B53A",}} /> 
                    :
                    <FontAwesomeIcon icon={faMoneyCheckDollar} className='dollar' /> 
                }
                <div className="paid">{paid?"Paid":"Pay"}</div> 
                <div className="feeamt">{events.Reg_Fee||"NIL"}</div>
            </div>
        </div>
    )
}
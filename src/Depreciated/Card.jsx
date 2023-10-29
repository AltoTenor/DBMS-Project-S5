import '../CSS/Card.css'

export default function Card({events}){
    return (
        <div className={events.Image?"card card-w-img":"card card-wo-img"}>
            <div className="clubname"><div className="clubnamehigh">{events.Club}</div></div>
            <img className="eventimage" src = {events.Image}/>
            <div className="eventname">{events.EventName||""}</div>
            <div className="eventvenue">{"Venue: "+events.Venue||""}</div>
            <div className="eventdate">{events.Date||""}</div>
            <div className="eventtime">{"Time: "+events.Time||""}</div>
            <div className="eventregfee"><div className="regfeehigh">{"Paid: "+events.Reg_Fee||""}</div></div>
        </div>
    )
}
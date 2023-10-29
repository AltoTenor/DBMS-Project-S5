import './../CSS/Events.css'
import CardTwo from './Card2'
import testimage1 from "../../assets/bg.jpg"
import testimage2 from "../../assets/fossmeet.jpeg"
import testimage3 from "../../assets/kp.jpg"
import testimage4 from "../../assets/hk.jpg"
import testimage5 from "../../assets/ft.jpg"
import testimage6 from "../../assets/tv.jpg"
import { useState } from 'react'




function BlockOfEvents({arr}){
    // console.log(arr);

    const [regClick,setRegClick] = useState(0);

    function handleRegistration(i){
        setRegClick(i);
        alert("Registered For " + i);
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


    let arr = [
        {
            Club: "Data Science Society",
            EventName: "Python Workshop",
            Date: "12/06/2023",
            Time: "3 PM",
            Reg_Fee: 300,
            Venue: "Room 305",
            Image:testimage2,
        },
        {
            Club: "Data Science Society",
            EventName: "Machine Learning Hackathon",
            Reg_Fee: 300,
            Date: "05/08/2023",
            Time: "10 AM",
            Venue: "Machine Learning Lab",
            Image: testimage1
        },
        {
            Club: "Data Science Society",
            Reg_Fee: 300,
            EventName: "Data Visualization Seminar",
            Date: "21/09/2023",
            Time: "2:30 PM",
            Image: testimage5,
            Venue: "Visualization Room",
        },
        {
            Club: "Data Science Society",
            Reg_Fee: 300,
            EventName: "Big Data Symposium",
            Date: "15/11/2023",
            Time: "9 AM",
            Venue: "Data Hub",
            Image: testimage4
        },
        {
            Club: "Data Science Society",
            Reg_Fee: 300,
            EventName: "AI in Healthcare Workshop",
            Date: "28/01/2024",
            Time: "11 AM",
            Venue: "HealthTech Center",
        },
        {
            Club: "Data Science Society",
            EventName: "Data Ethics Conference",
            Reg_Fee: 300,
            Date: "17/03/2024",
            Time: "4 PM",
            Image: testimage4,
            Venue: "Ethics Auditorium",
        },
        {
            Club: "Data Science Society",
            EventName: "Deep Learning Bootcamp",
            Date: "10/05/2024",
            Reg_Fee: 300,
            Time: "10 AM",
            Venue: "Deep Learning Lab",
        },
        {
            Reg_Fee: 300,
            Club: "Data Science Society",
            EventName: "Data Analytics Challenge",
            Date: "22/06/2024",
            Time: "1 PM",
            Image: testimage5,
            Venue: "Analytics Arena",
        },
        {
            Club: "Data Science Society",
            EventName: "AI Ethics Seminar",
            Image: testimage6,
            Date: "19/08/2024",
            Time: "3 PM",
            Reg_Fee: 300,
            Venue: "Ethics Lab",
        },
        {
            Club: "Data Science Society",
            Reg_Fee: 300,
            EventName: "Machine Learning Expo",
            Date: "04/10/2024",
            Time: "9:30 AM",
            Venue: "ML Expo Center",
            Image: testimage2
        }
        
        
    ]

    return(
        <div className="Events">
            <div className="events-heading">
                Upcoming Events 
            </div>
            <div className="events-desc">
                Events Coming soon
            </div>
            <BlockOfEvents arr={arr} />
        </div>
    )
}

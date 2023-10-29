import './../CSS/Events.css'
import CardTwo from './Card2'
import testimage3 from "../../assets/kp.jpg"
import testimage1 from "../../assets/bg1.jpg"
import testimage2 from "../../assets/fossmeet.jpeg"
import testimage4 from "../../assets/hk.jpg"
import testimage5 from "../../assets/fossmeet.jpeg"



function BlockOfEvents({arr}){

    return (

        <div className="white">
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
    )
}


export default function Events(){
    
    // let arr = [
    //     {
    //         Club: "Computer Science & Engg",
    //         EventName:"FossMEET",
    //         Date:"28/10/2023",
    //         Time:"2 PM",
    //         Venue:"Aryabhatta Hall",
    //         Reg_Fee: "$200",
    //         Image: testimage1,
    //     },
    //     {
    //         Club: "Saad ko Masti",
    //         EventName:"Kuch Bhi",
    //         Date:"28/10/2023",
    //         Time:"2 PM",
    //         Venue:"Aryabhatta Hall",
    //         Reg_Fee: "$200",
    //     },
    //     {
    //         Club: "CSEA",
    //         EventName:"FossMEET",
    //         Date:"28/10/2023",
    //         Image: testimage5,
    //         Time:"2 PM",
    //         Venue:"Aryabhatta Hall",
    //         Reg_Fee: "$100",
    //     },
    //     {
    //         Club: "Computer Science & Engg",
    //         EventName:"CodeInit",
    //         Date:"28/10/2023",
    //         Time:"2 PM",
    //         Venue:"Aryabhatta Hall",
    //         Reg_Fee: "$200",
    //         Image: testimage4,
    //     },
    //     {
    //         Club: "DCEA",
    //         EventName:"Hellloo",
    //         Date:"28/10/2023",
    //         Time:"2 PM",
    //         Venue:"Aryabhatta Hall",
    //         Reg_Fee: "$400",
    //     },
    //     {
    //         Club: "CSEA",
    //         EventName:"FossMEET",
    //         Date:"28/10/2023",
    //         Time:"2 PM",
    //         Venue:"Aryabhatta Hall",
    //         Image: testimage1,
    //         Reg_Fee: "$700",
    //     },
    // ];

    let arr = [
        {
            Club: "Computer Science & Eng.", EventName: "FossMEET", Date: "28/10/2023", Time: "2 PM", Venue: "Aryabhatta Hall", Reg_Fee: "$200", Image: testimage1
        },
        {
            Club: "Computer Science & Engg", EventName: "Hackathon 2023", Date: "15/11/2023", Time: "9 AM", Venue: "Innovation Center", Reg_Fee: "$150", Image: testimage2
        },
        {
            Club: "Computer Science & Engg", EventName: "Web Development Workshop", Date: "05/12/2023", Time: "3 PM", Venue: "Room 203", Reg_Fee: "$50", Image: testimage3
        },
        {
            Club: "Computer Science & Engg", EventName: "AI and Machine Learning Seminar", Date: "20/01/2024", Time: "10 AM", Venue: "Lecture Hall A", Reg_Fee: "Free"
        },
        {
            Club: "Computer Science & Engg", EventName: "Game Dev Workshop", Date: "18/02/2024", Time: "2 PM", Venue: "Game Lab", Reg_Fee: "$75"
        },
        {
            Club: "Computer Science & Engg", EventName: "Cybersecurity Conference", Date: "07/03/2024", Time: "11 AM", Venue: "Cybersecurity Center", Reg_Fee: "$100", Image: testimage1
        },
        {
            Club: "Computer Science & Engg", EventName: "Data Science Symposium", Date: "12/04/2024", Time: "10:30 AM", Venue: "Data Science Auditorium", Reg_Fee: "$50"
        },
        {
            Club: "Computer Science & Engg", EventName: "Mobile App Development Workshop", Date: "25/05/2024", Time: "3 PM", Venue: "Mobile Lab", Reg_Fee: "$60"
        },
        {
            Club: "Computer Science & Engg", EventName: "Robotics Competition", Date: "14/06/2024", Time: "1 PM", Venue: "Robotics Arena", Reg_Fee: "$80"
        },
        {
            Club: "Computer Science & Engg", EventName: "Blockchain Seminar", Date: "22/07/2024", Time: "4 PM", Venue: "Blockchain Lab", Reg_Fee: "$70"
        },
        {
            Club: "Computer Science & Engg", EventName: "Data Analytics Workshop", Date: "05/08/2024", Time: "2:30 PM", Venue: "Analytics Lab", Reg_Fee: "$55", Image: testimage1
        },
        {
            Club: "Computer Science & Engg", EventName: "Cloud Computing Conference", Date: "19/09/2024", Time: "9:30 AM", Venue: "Cloud Center", Reg_Fee: "$90", Image: testimage2
        },
        {
            Club: "Computer Science & Engg", EventName: "Virtual Reality Hackathon", Date: "11/10/2024", Time: "10 AM", Venue: "Virtual Reality Lab", Reg_Fee: "$70",Image: testimage2
        },
        {
            Club: "Computer Science & Engg", EventName: "Internet of Things Workshop", Date: "03/11/2024", Time: "3 PM", Venue: "IoT Lab", Reg_Fee: "$65", Image: testimage3
        },
        {
            Club: "Computer Science & Engg", EventName: "Artificial Intelligence Expo", Date: "22/12/2024", Time: "11 AM", Venue: "AI Arena", Reg_Fee: "Free", Image: testimage2
        },
        {
            Club: "Computer Science & Engg", EventName: "Big Data Symposium", Date: "15/01/2025", Time: "9:30 AM", Venue: "Big Data Auditorium", Reg_Fee: "$55", Image: testimage1
        },
        {
            Club: "Computer Science & Engg", EventName: "Software Development Bootcamp", Date: "28/02/2025", Time: "2 PM", Venue: "Development Hub", Reg_Fee: "$75"
        },
        {
            Club: "Computer Science & Engg", EventName: "Ethical Hacking Workshop", Date: "12/03/2025", Time: "10 AM", Venue: "Hacking Lab", Reg_Fee: "$60"
        },
        {
            Club: "Computer Science & Engg", EventName: "Virtual Machine Learning Seminar", Date: "24/04/2025", Time: "3 PM", Venue: "Virtual Lab", Reg_Fee: "$70", Image: testimage1
        },
        {
            Club: "Computer Science & Engg", EventName: "IT Job Fair", Date: "16/05/2025", Time: "11 AM", Venue: "Career Center", Reg_Fee: "Free", Image: testimage2
        }
        
    ]

    return(
        <div className="Events">
            <div className="events-heading">
                Registered Events 
            </div>
            <div className="events-desc">
                Events that you have already registered in
            </div>
            <BlockOfEvents arr={arr} />
        </div>
    )
}

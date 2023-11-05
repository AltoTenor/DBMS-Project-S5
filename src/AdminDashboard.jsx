import './AdminDashboard.css';
import Lefttab from './AdminDashboard/Components/Lefttab'
import Navbar from './AdminDashboard/Components/Navbar'
import Record from './AdminDashboard/Components/Record'
import RegEvents from './AdminDashboard/Components/RegEvents'
import UpcEvents from './AdminDashboard/Components/UpcEvents'
import UpdateEvent from './AdminDashboard/Components/UpdateEvent'
import AddEvent from './AdminDashboard/Components/AddEvent'
import { useState } from 'react';
import ClubEvents from './AdminDashboard/Components/ClubEvents';


export default function UserDashboard(){

    const [tabNumber,setTabNumber] = useState(1);
    const [EventNo,setEventNo] = useState(1);

    let events_renders = [
        <RegEvents tabNumber={tabNumber}/> ,
        <UpcEvents tabNumber={tabNumber} />,
        <AddEvent tabNumber={tabNumber}/>,
        <ClubEvents tabNumber={tabNumber} setTabNumber={setTabNumber} setEventNo = {setEventNo} EventNo={EventNo}/>, 
        <UpdateEvent tabNumber={tabNumber} EventNo={EventNo}/> 
    ]
    let width = window.innerWidth;

    // console.log(tabNumber);
    return (
        <div className='AdminDashboard'>
            <Lefttab tabNumber={tabNumber} setTabNumber={setTabNumber} />
            <Navbar/>
            <Record/>
            {events_renders[tabNumber-1]}
        </div>
    )
}
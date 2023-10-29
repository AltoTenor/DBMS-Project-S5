import './AdminDashboard.css';
import Lefttab from './AdminDashboard/Components/Lefttab'
import Navbar from './AdminDashboard/Components/Navbar'
import Record from './AdminDashboard/Components/Record'
import RegEvents from './AdminDashboard/Components/RegEvents'
import UpcEvents from './AdminDashboard/Components/UpcEvents'
import AddEvent from './AdminDashboard/Components/AddEvent'
import { useState } from 'react';


export default function UserDashboard(){

    const [tabNumber,setTabNumber] = useState(1);

    let events_renders = [<RegEvents tabNumber={tabNumber}/> ,<UpcEvents tabNumber={tabNumber} />,<AddEvent tabNumber={tabNumber}/> ]

    console.log(tabNumber);
    return (
        <div className='AdminDashboard'>
            <Lefttab tabNumber={tabNumber} setTabNumber={setTabNumber} />
            <Navbar/>
            <Record/>
            {events_renders[tabNumber-1]}
        </div>
    )
}
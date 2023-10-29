import './UserDashboard.css';
import Lefttab from './UserDashboard/Components/Lefttab'
import Navbar from './UserDashboard/Components/Navbar'
import Record from './UserDashboard/Components/Record'
import RegEvents from './UserDashboard/Components/RegEvents'
import UpcEvents from './UserDashboard/Components/UpcEvents'
import { useState } from 'react';


export default function UserDashboard(){

    const [tabNumber,setTabNumber] = useState(1);

    let events_renders = [<RegEvents tabNumber={tabNumber}/> ,<UpcEvents tabNumber={tabNumber} /> ]

    console.log(tabNumber);
    return (
        <div className='UserDashboard'>
            <Lefttab tabNumber={tabNumber} setTabNumber={setTabNumber} />
            <Navbar/>
            <Record/>
            {events_renders[tabNumber-1]}
        </div>
    )
}
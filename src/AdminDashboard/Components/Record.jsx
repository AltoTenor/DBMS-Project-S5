import './../CSS/Record.css'
import logo from '../../assets/clipart.png'
import GenPDF from '../../GenPDF/Gepdf'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useAuth } from '../../Auth/authProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons'




export default function Record(){
    
    const { token } = useAuth();
    const [objs,setObjs] = useState({});
    const [keysList,setKeysList] = useState([]);

    useEffect( ()=>{
        // console.log(token);
        axios.get("https://nitclub-backend--arshiyahafis.repl.co/profile/"
        ,{
            headers:{"Authorization" : `token ${token}`}
        }
        )
        .then( (r)=>{
            console.log(r);
            setObjs({
                "Admin Name":r.data.first_name+" "+r.data.last_name,
                "Email":r.data.email,
                "Roll Number":r.data.roll_number,
                "Club":r.data.clubs[0].club_name,
                "Club ID":r.data.clubs[0].club_id,
                "Faculty Advisor":r.data.clubs[0].club_fa,
                "Current Balance":r.data.clubs[0].club_balance,
                "Logo":r.data.clubs[0].club_logo,
                // "Number of Events":"7",
            })

        } )
        .catch((e)=>{
            console.log(e);
        }) 
    },[]
    )

    
    

    useEffect( ()=>{
        setKeysList(Object.keys(objs));
        },[objs]
    )


    function handleGeneratePDF(){
        axios.get(`https://nitclub-backend--arshiyahafis.repl.co/club/${objs["Club ID"]}/events`
        ,{
            headers:{"Authorization" : `token ${token}`}
        }
        )
        .then( (r)=>{
            console.log(r.data);
            let pdfarr = r.data.map( x => ({
                "col1":x.event_name,
                "col2":x.event_budget,
                "col3":x.event_cost,
                "col4":x.event_profit,
                "col5":x.event_students,
                "col6":x.event_regfee,
                })
            );
            let totalprofit = 0;
            let totalcost = 0;
            r.data.forEach(x=>{totalcost+=x.event_cost;totalprofit+=x.event_profit;})
            pdfarr.push({
                "col1":"Total",
                "col3":totalcost,
                "col4":totalprofit,
            })
            GenPDF(objs["Club"],pdfarr);
        } )
        .catch((e)=>{
            console.log(e);
        }) 
    }

    
    // console.log(objs.Logo);
    return(
        <div className="Record">
            {objs.Logo?
            <img 
                className='clubLogo' 
                src={"http://nitclub-backend--arshiyahafis.repl.co"+objs.Logo} 
                alt={"Club Logo"}
            />
            :
            <FontAwesomeIcon icon={faUsers} size='xl'/>
            }

            {
                keysList.filter(x=>(x!="Club ID" && x!="Logo")).map( (x,i) => (
                    <div key={i} className={`field${i}`}>
                        <div className="value">
                            {objs[x]}
                        </div>
                        <div className="key">
                            {x}
                        </div>
                    </div>
                ))
            }
            {/* <button className='Report_Button' type='submit' onClick={()=>GenPDF("CSEA",rows)} > Generate Report  </button> */}
            <button className='Report_Button' type='submit' onClick={handleGeneratePDF} > Generate Report  </button>

        </div>
    )
}

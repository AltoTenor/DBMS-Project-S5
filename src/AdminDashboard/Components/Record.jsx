import './../CSS/Record.css'
import logo from '../../assets/clipart.png'
import GenPDF from '../../GenPDF/Gepdf'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useAuth } from '../../Auth/authProvider';





export default function Record(){
    
    const { token } = useAuth();
    const [objs,setObjs] = useState({});
    const [keysList,setKeysList] = useState([]);
    const [rows,setRows] = useState([]);

    useEffect( ()=>{
        // console.log(token);
        axios.get("https://nitclub-backend--arshiyahafis.repl.co/profile/"
        ,{
            headers:{"Authorization" : `token ${token}`}
        }
        )
        .then( (r)=>{
            // console.log(r);
            setObjs({
                "Admin Name":r.data.first_name+" "+r.data.last_name,
                "Email":r.data.email,
                "Roll Number":r.data.roll_number,
                "Club":r.data.clubs[0].club_name,
                "Faculty Advisor":r.data.clubs[0].club_fa,
                "Current Balance":r.data.clubs[0].club_balance,
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
        setRows([
            {
                "col1": "Aritro", 
                "col2": "Aritro1", 
                "col3": "Aritro2", 
                "col4": "Aritro3", 
                "col5": "Aritro4", 
                "col6": "Aritro5", 
            },
        ])
        },[objs]
    )


    

    

    return(
        <div className="Record">
            <img className='clubLogo' src={logo} alt={"Club Logo"}/>

            {
                keysList.map( (x,i) => (
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
            <button className='Report_Button' type='submit' onClick={()=>GenPDF("CSEA",rows)} > Generate Report  </button>

        </div>
    )
}

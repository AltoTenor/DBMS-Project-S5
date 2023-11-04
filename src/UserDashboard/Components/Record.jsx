import './../CSS/Record.css'
import logo from '../../assets/clipart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../Auth/authProvider'
import { useState ,useEffect } from 'react'
import axios from 'axios'




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
                "Name":r.data.first_name+" "+r.data.last_name,
                "Email":r.data.email,
                "Phone Number":r.data.phone_number,
                "Roll Number":r.data.roll_number,
            })
        } )
        .catch((e)=>{
            console.log(e);
        }) },[]
    )

    useEffect( ()=>{
        setKeysList(Object.keys(objs));
        },[objs]
    )

    return(
        <div className="Record">
            {/* <img className='clubLogo' src={logo} alt={"Club Logo"}/> */}
            <FontAwesomeIcon className='clubLogo' icon={faCircleUser}  />

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


        </div>
    )
}

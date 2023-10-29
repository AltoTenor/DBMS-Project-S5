import './../CSS/Record.css'
import logo from '../../assets/clipart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'




export default function Record(){
    
    const objs = {
        "Student":"Aritro Ghosh",
        "Email":"aritro10@gmail.com",
        "Roll Number":"B210466CS",
    }

    let keys = Object.keys(objs);

    return(
        <div className="Record">
            {/* <img className='clubLogo' src={logo} alt={"Club Logo"}/> */}
            <FontAwesomeIcon className='clubLogo' icon={faCircleUser}  />

            {
                keys.map( (x,i) => (
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

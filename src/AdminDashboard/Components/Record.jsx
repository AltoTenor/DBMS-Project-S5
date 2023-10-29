import './../CSS/Record.css'
import logo from '../../assets/clipart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'




export default function Record(){
    
    const objs = {
        "Admin Name":"Aritro Ghosh",
        "Email":"aritro10@gmail.com",
        "Club Name":"GDSC",
        "Current Balance":"Rs 1000.00",
        "Faculty Advisor":"Dr Anu Mary Chacko",
        "Number of Events":"7",
    }

    let keys = Object.keys(objs);

    return(
        <div className="Record">
            <img className='clubLogo' src={logo} alt={"Club Logo"}/>

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

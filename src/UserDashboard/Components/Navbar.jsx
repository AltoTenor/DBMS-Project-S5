import './../CSS/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Navbar(){
    let width = window.innerWidth;
    return(
        <div className="Navbar">
            {
                (width>768)&&
                <div className="search">
                    <input defaultValue = {"Search"}></input>
                    <FontAwesomeIcon size='lg' icon={faMagnifyingGlass} />
                </div>
            }
            <Link to={`/logout`} relative='route' className="logout" >Logout</Link>
        </div>
    )
}

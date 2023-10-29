
import './../CSS/Navbar.css'
import { Outlet, Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="Nav">
            {/* <div className="login-btn"> */}
                <Link to={`/register`} relative='route' className="login-btn" >Register</Link>
            {/* </div> */}
        </div>
    )
}


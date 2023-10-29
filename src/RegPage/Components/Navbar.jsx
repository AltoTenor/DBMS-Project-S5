
import './../CSS/Navbar.css'
import { Outlet, Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="Nav">
            <Link to={`/login`} relative='route' className="login-btn" >Login</Link>
        </div>
    )
}


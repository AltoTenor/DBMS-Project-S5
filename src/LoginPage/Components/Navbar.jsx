
import './../CSS/Navbar.css'
import { Outlet, Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="Nav">
            <div className="login-btn">
                Login
                <Link to={`/xy`} relative='route'>Your Name</Link>
            </div>
            <div className="register-btn">
                Register
            </div>
        </div>
    )
}


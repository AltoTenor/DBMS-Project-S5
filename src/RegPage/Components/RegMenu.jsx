import './../CSS/RegMenu.css'
import { useState } from 'react';
import AdminRegForm from './AdminRegForm'
import StudentRegForm from './StudentRegForm'



export default function RegMenu(){
    const [isAdmin,setIsAdmin] = useState(0);

    function changeToAdmin(){
        setIsAdmin(1);
    }

    function changeToStudent(){
        setIsAdmin(0);
    }

    return (
        <div className={isAdmin?"regmenu-blue":"regmenu-green"}>
            <div className="tabs">
                <div className={!isAdmin?"admin--btn1":"student--btn"} onClick={changeToStudent} > As a Student </div>
                <div className={isAdmin?"admin--btn":"student--btn1"} onClick={changeToAdmin} >  As an Admin </div>
            </div>
            {isAdmin?
                <>
                    <></>
                    <AdminRegForm/>
                </>
                :
                <>
                    <StudentRegForm/>
                    <></>
                </>
            }
        </div>
    )
}
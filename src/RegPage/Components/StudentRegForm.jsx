import "./../CSS/CSSRegForm.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function StudentRegForm(){

    const navigate = useNavigate();

    const [student,setStudent] = useState(
        {
            "name":"",
            "email":"",
            "password":"",
            "roll_number":"",
            "phone_number":"",
        }
    )

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStudent(obj => ({...obj, [name]: value}))
    }


    function handleSubmit(e){
        e.preventDefault();
        const firstSpaceIndex = student.name.indexOf(" ");
        if (firstSpaceIndex !== -1){
            const firstPart = student.name.substring(0, firstSpaceIndex); // Extract the first part
            const secondPart = student.name.substring(firstSpaceIndex + 1);
            const student_data = {
                ...student,
                "first_name": firstPart,
                "last_name":secondPart,
                "phone_number":parseInt(student.phone_number),
            }
            delete student_data.name;
            axios.post("https://nitclub-backend--arshiyahafis.repl.co/register/", student_data,{
                headers: {
                'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                console.log(response.status);
                navigate("/login", { replace: true });
            }
            ,(r)=>{
                console.log(r);
                alert("Invalid Register");
            });
        }
        else{
            alert("Enter Full Name!");
        }
    }



    return (
        <form className="InputFields-Black">
            <div className="regmenu--heading-black">
                Register as a Student
            </div>
            <div className="regmenu--desc" >
                Sign up to continue
            </div>

            <label className="regmenu--text" >Name</label>
            <input 
                className="regmenu--text-input"
                type="text" 
                name="name" 
                value={student.name || ""} 
                onChange={handleChange}
            />

            <label className="regmenu--text" >Email</label>
            <input 
                className="regmenu--text-input"
                type="text" 
                name="email" 
                value={student.email || ""} 
                onChange={handleChange}
            />



            <label className="regmenu--text" >Password</label>
            <input 
                className="regmenu--text-input"
                type="password" 
                name="password" 
                value={student.password || ""} 
                onChange={handleChange}
            />

            <label className="regmenu--text" >Phone Number</label>
            <input 
                className="regmenu--text-input"
                type="text" 
                name="phone_number" 
                value={student.phone_number || ""} 
                onChange={handleChange}
            />

            <label className="regmenu--text" > Roll No </label>
            <input 
                className="regmenu--text-input"
                type="text" 
                name="roll_number" 
                value={student.roll_number || ""} 
                onChange={handleChange}
            />
            
            <div className="btndiv">
                <button className='submitBtn submitBtn--blue' type='submit' onClick={handleSubmit}> REGISTER  </button>
            </div>
        </form>
    )
}

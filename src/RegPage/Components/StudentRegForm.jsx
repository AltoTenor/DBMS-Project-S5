import "./../CSS/CSSRegForm.css"
import { useState } from 'react';


export default function AdminRegForm(){

    const [student,setStudent] = useState(
        {
            "name":"",
            "email":"",
            "password":"",
            "rollno":"",
        }
    )

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStudent(obj => ({...obj, [name]: value}))
    }


    function handleSubmit(e){
        e.preventDefault();
        console.log(student);
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

            <label className="regmenu--text" > Roll No </label>
            <input 
                className="regmenu--text-input"
                type="text" 
                name="rollno" 
                value={student.rollno || ""} 
                onChange={handleChange}
            />
            
            <div className="btndiv">
                <button className='submitBtn submitBtn--blue' type='submit' onClick={handleSubmit}> REGISTER  </button>
            </div>
        </form>
    )
}

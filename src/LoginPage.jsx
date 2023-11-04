import { useEffect, useState } from 'react';
import './LoginPage.css';
import Left from './LoginPage/Components/Left'
import Right from './LoginPage/Components/Right'



function LoginPage() {
    const [width,setWidth] = useState(1000);

    useEffect(()=>{
        setWidth(window.innerWidth);
        console.log(window.innerWidth);
    }
    ,[window])

    return (
        <div className="LoginPage">
            <div className="leftApp" hidden = {(width>768)?"":"hidden"}>
                {(width>768)&&<Left/>}
            </div>
            <div className="rightApp">
                <Right/>
            </div>
        </div>
    );
}

export default LoginPage;

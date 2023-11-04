import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import './../CSS/Confirmation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Confirmation({handleYes,handleNo}){
    return (
        <div className="are-you-sure-screen">
            <div className="sure-box">
                <FontAwesomeIcon icon={faTriangleExclamation} size='2xl' color='#f00' />
                Are you sure you want to delete this event?
                <div className="btns">
                    <div className="btn1" onClick={handleYes}>
                        Yes
                    </div>
                    <div className="btn2" onClick={handleNo}>
                        No
                    </div>
                </div>
            </div>
        </div>
    )
}
    
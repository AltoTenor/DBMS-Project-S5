import './../CSS/Lefttab.css'
import logo_black from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus,faCalendarDays,faFileCirclePlus,faPenToSquare,faPeopleRoof } from '@fortawesome/free-solid-svg-icons'

export default function Lefttab({tabNumber, setTabNumber}){
        let width = window.innerWidth;
        return(
            <div className="Lefttab">
                {
                    (width > 768) &&<>
                    <img className="item item-1"  src={logo_black}/>
                    <div className="item item-2" >  </div>
                    </>
                }
                
    
                <div className="item item-3"  onClick={()=>setTabNumber(1)} > 
                    {
                        (tabNumber == 1) ?
                            <FontAwesomeIcon   icon={faCalendarDays} size="2xl" style={{color: "#ddd",}} />
                            :
                            <FontAwesomeIcon  icon={faCalendarDays} size="2xl"   />
                    }
                     
                </div>
                <div className="item item-4"   onClick={()=>setTabNumber(2)}> 
                    {
                        (tabNumber == 2)?
                            <FontAwesomeIcon icon={faCalendarPlus} size="2xl" style={{color: "#ddd",}} color='#ddd' />
                            :
                            <FontAwesomeIcon icon={faCalendarPlus} size="2xl"   />
                    }
                     
                </div>
                <div className="item item-5"   onClick={()=>setTabNumber(3)}> 
                    {
                        (tabNumber == 3)?
                            <FontAwesomeIcon icon={faFileCirclePlus} size="2xl" style={{color: "#ddd",}} />
                            :
                            <FontAwesomeIcon icon={faFileCirclePlus} size="2xl"   />
                    }
                     
                </div>

                { tabNumber != 5 ? 

                <div className="item item-5"   onClick={()=>setTabNumber(4)}> 
                    {
                        (tabNumber == 4 )?
                            <FontAwesomeIcon icon={faPeopleRoof} size="2xl" style={{color: "#ddd",}} />
                            :
                            <FontAwesomeIcon icon={faPeopleRoof} size="2xl"   />
                    }
                     
                </div>
                :
                <div className="item item-5"> 
                    {
                        (tabNumber == 5 )?
                            <FontAwesomeIcon icon={faPenToSquare} size="2xl" style={{color: "#ddd",}} />
                            :
                            <FontAwesomeIcon icon={faPenToSquare} size="2xl"   />
                    }
                     
                </div>

                }
    
            </div>
        )
    }
    
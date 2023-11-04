import './RegPage.css';
import Left from './RegPage/Components/Left'
import Right from './RegPage/Components/Right'



function RegPage() {
    let width = window.innerWidth
  return (
    <div className = 'regApp'>
        <div className="leftApp" hidden = {(width>768)?"":"hidden"}>
                {(width>768)&&<Left/>}
            </div>
        <div className="rightApp">
            <Right/>
        </div>
    </div>
  );
}

export default RegPage;

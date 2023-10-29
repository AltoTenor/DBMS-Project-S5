import './RegPage.css';
import Left from './RegPage/Components/Left'
import Right from './RegPage/Components/Right'



function RegPage() {
  return (
    <div className = 'regApp'>
        <div className="leftApp">
            <Left/>
        </div>
        <div className="rightApp">
            <Right/>
        </div>
    </div>
  );
}

export default RegPage;

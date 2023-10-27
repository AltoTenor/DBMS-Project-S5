import './LoginPage.css';
import Left from './LoginPage/Components/Left'
import Right from './LoginPage/Components/Right'



function LoginPage() {
  return (
    <div className="LoginPage">
        <div className="leftApp">
            <Left/>
        </div>
        <div className="rightApp">
            <Right/>
        </div>
    </div>
  );
}

export default LoginPage;

import './App.css';
import Left from './LoginPage/Components/Left'
import Right from './LoginPage/Components/Right'

function App() {
  return (
    <div className="App">
        <div className="leftApp">
            <Left/>
        </div>
        <div className="rightApp">
            <Right/>
        </div>
    </div>
  );
}

export default App;

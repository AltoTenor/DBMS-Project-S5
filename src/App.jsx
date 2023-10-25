import './App.css';
import Left from './Left.jsx'
import Right from './Right.jsx'

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

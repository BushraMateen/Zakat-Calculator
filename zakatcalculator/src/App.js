
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="container dark">
        <div className="app">
        <div className='app-header'>
        <h1>Zakat Calculator</h1></div>
        <Home />
        <div >
        <button className='submit-btn'>Submit</button>
      </div>
        </div>
       
    </div>
  );
}

export default App;

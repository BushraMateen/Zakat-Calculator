
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ZakatTable from './Features/zakatForm/ZakatTable';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
        <div className='app-header'>
        <h1>Zakat Calculator</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ZakatTable" element={<ZakatTable />}></Route>
        </Routes>
        
        </div>
       
    </div>  
    </Router>
   
  );
}

export default App;

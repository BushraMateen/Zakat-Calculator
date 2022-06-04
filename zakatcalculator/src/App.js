
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ZakatTable from './Features/zakatForm/ZakatTable';
import {useState, useEffect} from 'react'

function App() {

  let [table,setTable] = useState([])

  useEffect(() => {
    getTable()
  
  }, [])
  
  
  let getTable = async () => {
    let response = await fetch('http://127.0.0.1:8000/table/')
    let data = await response.json()
    setTable(data)
  }
  return (
    <Router>
      <div className="container dark">
        <div className="app">
        <div className='app-header'>
        <h1>Zakat Calculator</h1>
  
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ZakatTable" element={<ZakatTable items = {table}/>}></Route>
          
        </Routes>
        
        </div>
       
    </div>  
    </Router>
   
  );
}

export default App;

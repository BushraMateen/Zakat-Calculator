
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ZakatTable from './Features/zakatForm/ZakatTable';
import {useState, useEffect} from 'react';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const { isAuthenticated,loginWithRedirect,logout,user} = useAuth0();


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
    isAuthenticated ?
    <Router>
      <div className="container dark">
        <div className="app">
        <div className='app-header'>
        <h1>Zakat Calculator</h1>
        
        <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    <div>{console.log(user)}</div>
  
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ZakatTable" element={<ZakatTable items = {table}/>}></Route>
        </Routes>
        </div>
    </div>  
    </Router>
    :<button onClick = {loginWithRedirect}>login</button>
  );
}

export default App;

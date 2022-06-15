
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ZakatTable from './Features/zakatForm/ZakatTable';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const { isAuthenticated,loginWithRedirect,logout} = useAuth0();
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
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ZakatTable" element={<ZakatTable/>}></Route>
        </Routes>
        </div>
    </div>  
    </Router>
      :  <button onClick = {loginWithRedirect}>login</button>
  );
}

export default App;

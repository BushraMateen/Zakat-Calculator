
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ZakatTable from './Features/zakatForm/ZakatTable';
import {useAuth0} from '@auth0/auth0-react';
import {useState} from 'react';


function App() {
  const { isAuthenticated,loginWithRedirect,logout} = useAuth0();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    isAuthenticated ?
      <Router>
        <div className="container dark">
          <div className="app">
            <div className='app-header'>
              <h1 className='header'>Zakat Calculator</h1>
                <span
                  className={
                    isNavExpanded ? "navigation-menu-expanded" : "navigation-menu"
                  }
                >
                  <button
                    className="hamburger"
                    onClick={() => {
                      setIsNavExpanded(!isNavExpanded);
                    }}
                  >
                    {/* icon from Heroicons.com */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className='logout-btn' onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                  </button>
                </span>
            </div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/ZakatTable" element={<ZakatTable />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
      : <button className='login-btn' onClick={loginWithRedirect}>login</button>
  );
}

export default App;

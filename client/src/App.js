import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Registration from './Components/Registration/Registration';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <Router>
          <div className='container'>
            <Header/>
              <Routes>
                <Route path='/' element={ <Dashboard /> } />
                <Route path='/login' element={ <Login/> } />
                <Route path='/registration' element={ <Registration/> } />
              </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;

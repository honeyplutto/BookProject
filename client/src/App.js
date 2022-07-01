import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Header from './Components/Header/Header';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      <ToastContainer />
    </>
  );
}

export default App;

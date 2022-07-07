import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Header from './components/Header/Header';
import Book from './components/Book/Book';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  // TODO create middleware to check path when login

  return (
    <>
      <Router>
          <div className='container'>
            <Header/>
              <Routes>
                <Route path='/book' element={ <Book /> } />
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

import logo from './logo.svg';
// import './App.css';
import SignupForm from './SignupForm'
import ScrollToIndex from './ScrollToIndex'
import VideoClick from './VideoClick'
import ReduxeApp from './Redux/ReduxeApp';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {


  return (
    <div className="App">

      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Reduxe">Reduxe Us</Link>
            </li>
            <li>
            </li>
          </ul>
          <Routes>
            {/* <Route exact path='/' element={< Home />}></Route> */}
            <Route exact path='/Reduxe' element={< ReduxeApp />}></Route>
          </Routes>
        </div>
      </Router>

      {/* <Reduxe />
      <SignupForm />
      <ScrollToIndex />
      <VideoClick /> */}
    </div>
  );
}

export default App;





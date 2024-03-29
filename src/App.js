import Header from "./components/Header"
import Footer from "./components/Footer"
import IntroJumbo from "./components/IntroJumbo"
import LogList from "./components/LogList"
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Home from './components/Home'
import SavedLogs from './components/SavedLogs'

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import { useState } from 'react';

function App() {
  const [logList, setLogList] = useState([]);

  function updateLogList(item) {
    setLogList([...item]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Header />
          <Route path='/' exact component={SavedLogs} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/logout' exact component={Logout} />
          <Route path='/search'  exact component={LogList} />
          <Route path='/search/:id' component={LogList} />
          <Footer />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;

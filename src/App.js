import Header from "./components/Header"
import IntroJumbo from "./components/IntroJumbo"
import LogList from "./components/LogList"
import Login from './components/Login'
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
      <Header
        searchNewLog={updateLogList}
      />
      <Router>
        <Route path='/login' exact component={Login} />
      </Router>
      <LogList
        logCardList={logList}
      />
    </div>
  );
}

/*
<Route path='/' exact component={Home} logCardList={logList}/>

  <Route path='/' exact render={() => {
          (<LogList
            logCardList={logList}
          />)

        }} />
*/

export default App;

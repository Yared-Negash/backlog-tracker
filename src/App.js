import Header from "./components/Header"
import IntroJumbo from "./components/IntroJumbo"
import LogList from "./components/LogList"
import Login from './components/Login'
import Home from './components/Home'
import SavedLogs from './components/SavedLogs'

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

  function logListComponent() {
    return (<LogList logCardList={logList} />);
  }

  return (
    <div className="App">
      <Header
        searchNewLog={updateLogList}
      />
      <Router>
        <Route path='/' exact component={SavedLogs} />
        <Route path='/login' exact component={Login} />
        <Route path='/search'  component={logListComponent} />
      </Router>
    </div>
  );
}

export default App;

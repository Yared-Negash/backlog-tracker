import Header from "./components/Header"
import IntroJumbo from "./components/IntroJumbo"
import LogList from "./components/LogList"

import './App.css';
import { useState } from 'react';

function App() {
  const [logList, setLogList] = useState([]);

  function updateLogList(item){
    setLogList([...item]);
  }
  return (
    <div className="App">
      <Header
        searchNewLog={updateLogList}
      />
      <LogList
        logCardList={logList}
      />
    </div>
  );
}

export default App;

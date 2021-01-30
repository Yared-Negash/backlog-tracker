import logo from './logo.svg';
import Header from "./components/Header"
import IntroJumbo from "./components/IntroJumbo"
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
    <IntroJumbo />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  
    </div>
  );
}

export default App;

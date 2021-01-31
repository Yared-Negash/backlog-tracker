import logo from './logo.svg';
import Header from "./components/Header"
import IntroJumbo from "./components/IntroJumbo"
import './App.css';
import LogCard from "./components/LogCard"

const test = {"logTitle":"The Man in the High Castle","logPlot":"In a dystopian America dominated by Nazi Germany and Imperial Japan, a young woman discovers a mysterious film that may hold the key to toppling the totalitarian regimes.","Release":"15 Jan 2015","logPoster":"https://m.media-amazon.com/images/M/MV5BZWEwNzQ4NzUtMWRmYS00NDdiLTg5NDItODA5M2M4YTM0ZTE2XkEyXkFqcGdeQXVyMTAzNjU2NjM1._V1_SX300.jpg"};

function App() {
  return (
    <div className="App">
    <Header />
    <IntroJumbo />
    <LogCard 
      logTitle={test.logTitle}
      logPlot={test.logPlot}
      logRelease={test.logRelease}
      logPoster={test.logPoster}
    />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

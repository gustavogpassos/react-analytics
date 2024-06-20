import logo from './logo.svg';
import './App.css';
import Facebook from './FbComponent';

import gaTrack from './GAComponent';


function App() {
  gaTrack()
  gaTrack.pageview(window.location.pathname)

  return (
    <div className="App">
      <Facebook />
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

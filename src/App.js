import logo from './logo.svg';
import './App.css';

import ReactGA from "react-ga4";

ReactGA.initialize('G-WLCR27FKXY')


function App() {
  ReactGA.send({ hitType: "begin_checkout", page: window.location.pathname + window.location.search })
  return (
    < div className="App" >
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
    </div >
  );
}

export default App;

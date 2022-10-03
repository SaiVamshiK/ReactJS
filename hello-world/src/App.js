import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <p>Sum of 1 and 5 : {1+5}</p>
      <div className="App">
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
            Hello React
          </a>
        </header>
      </div>
   </>
  );
}

export default App;

import holberton from './holberton.jpg';
import './App.css';
import {getFooterCopy} from './utils';

function App() {
  const footerCopy = getFooterCopy(true);
  return (
    <div className="App">
      <div className="App-header">
        <img src={holberton} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
       
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>{footerCopy}</p>

      </div>

    </div>
  );
}

export default App;

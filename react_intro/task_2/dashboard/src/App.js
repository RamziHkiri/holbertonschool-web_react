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
        <label>email: </label>
        <input type="text" name="email" />
        <label>password: </label>
        <input type="text" name="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p className='CopyRight'>Copyright 2024 - {footerCopy}</p>

      </div>

    </div>
  );
}

export default App;

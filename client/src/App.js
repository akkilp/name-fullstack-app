import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [placeholder, setPlaceholder] = useState('Hi');

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      setPlaceholder(data.result);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {placeholder}
        </p>

      </header>
    </div>
  );
}

export default App;

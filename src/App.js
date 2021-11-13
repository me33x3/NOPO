import React, {  useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';


// axios 추가
import axios from 'axios';

function App() {

  // 서버에서 받은 데이터를 console로 찍어서 확인한다.
  useEffect(() => {
    axios.get('/api/test')
      .then(res => console.log(res))
      .catch()
  })


  return (
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

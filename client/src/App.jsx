import Create from '../src/views/Create/Create';        
import Detail from '../src/views/Detail/Detail';
import Home from '../src/views/Home/Home';
import './App.css';


function App() {
  return (
    <div className='App'>
        <Home/>
        <Detail/>
        <Create/>
    </div>
  )
}


export default App;

/*

//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home/>
        <Detail/>
        <Create/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/



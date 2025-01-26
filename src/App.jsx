<<<<<<< HEAD
import "./styles/App.css";
import NameInput from "./components/input-components/NameInput";
import BirthdayInput from "./components/input-components/Birthdate";

function App() {
  return (
    <div className="all-inputs-wrapper">
      <div className="personal-information">
        <h1>Personal Information</h1>
        <section>
          <NameInput />
          <BirthdayInput />
        </section>
      </div>
    </div>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
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

export default App
>>>>>>> ce9f59cdc9b97489d3b21c49f92c76ad163601b4

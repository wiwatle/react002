import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import useSWR from 'swr';




function App() {
  const [count, setCount] = useState(0)
  
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);
    if (error) return <p>Error loading data</p>;
    if (!data) return <p>Loading...</p>;
 
  
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
      <h1>wiwat lephon 009</h1>
      {/*
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
       */}
        
        <div>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        <h3>{user.username}</h3>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>

    </>
  )
}

export default App

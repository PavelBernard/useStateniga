import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import { Counter } from './components/Counter.jsx'
import { ShowTime } from './components/ShowTime.jsx'
import { FetchUsers } from './components/FetchUsers.jsx'
import { AutoCounter } from './components/AutoCounter.jsx'
import PWABadge from './PWABadge.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter />
     <ShowTime />
     <FetchUsers />
     <AutoCounter />
    </>
  )
}

export default App

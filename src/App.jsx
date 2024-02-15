import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Content1 from './components/Content1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Content1 />

    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Hero from './Pages/Hero.jsx'
import Section from './Pages/Section.jsx'
import Section2 from './Pages/Section2.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <Hero/>
   <Section/>
   <Section2/>

  </>
  )
}

export default App

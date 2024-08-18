import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Me from './components/ME'
import Home from './components/Home'
import Skill from './components/skill'
import Project from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Me/>
      <Skill />
      <Project/> 
      <Contact />
      <Footer/>
    </>
  )
}

export default App

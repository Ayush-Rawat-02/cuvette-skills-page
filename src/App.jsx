import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Head from './components/Head/Head'
import ScoreModal from './components/scoreModal/scoreModal'

function App() {
  const [toggleScore,setToggleScore] = useState(false)

  return (
    <>
      <Navbar/>
      <Head setToggleScore={setToggleScore}/>
      {toggleScore&&<ScoreModal setToggleScore={setToggleScore}/>}
    </>
  )
}

export default App

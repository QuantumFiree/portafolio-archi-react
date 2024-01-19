import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from'./components/Navbar'
import HeaderProfile from'./components/HeaderProfile'
import ContentCardsProject from'./components/ContentCardsProject'
import * as React from 'react'
import Button from '@mui/material/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>      
        <Navbar/>
        <HeaderProfile/>
        <ContentCardsProject/>
      </>
  )
}

export default App

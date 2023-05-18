import React from 'react'
import NavBar from './components/Navbar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  )
}

export default App
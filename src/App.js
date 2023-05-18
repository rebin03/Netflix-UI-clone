import React from 'react'
import NavBar from './components/Navbar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import { action, comedy, horror, originals, romance, trending } from './urls'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner url={trending}/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={trending} title='Trending Now' isSmall/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
    </div>
  )
}

export default App
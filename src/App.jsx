import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Router from './component/Allrouter/Router'
import Score from './component/Scroe'
import Footer from './component/Footer'
import Header from './component/Header'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Router/>
      <Score/>
      <Footer/>
    </div>
  )
}

export default App
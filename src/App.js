import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import './App.css'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

function App() {
  
  return (
    <>
     <Router>
       <Navbar/>
       
       <Switch>
         <Route path="/" exact />
       </Switch>
       <HeroSection/>
       <Cards/>
       <Footer/>
     </Router>
     
     
      
    </>
  )
}

export default App

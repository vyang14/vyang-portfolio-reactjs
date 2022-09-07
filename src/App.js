import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hobbies from './components/Hobbies/Hobbies'
import Contact from './components/Contact/Contact'
import Profile from './components/Profile/Profile'
import Homepage from './components/Homepage/Homepage'

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* Routes */}
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  )
}
export default App

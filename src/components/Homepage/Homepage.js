import React, { useState } from 'react'
import { Jumbotron, Container, Image, Button, Col, Row } from 'react-bootstrap'
import './Homepage.css'

// Homepage that users will see when first logging in
export default function Homepage() {
  
    // It redirects users to create contract when clicking on the button
    window.location.assign('/')
  

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  return (
    <>
      
    </>
  )
}

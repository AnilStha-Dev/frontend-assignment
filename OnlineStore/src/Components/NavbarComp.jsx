import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const NavbarComp = () => {
  return (
    <>

    <Navbar className="bg-info">
      <Container className='d-flex justify-content-center'>
        <Navbar.Brand href="#" className='fs-2 fw-bold'>
          Online Store
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
  )
}

export default NavbarComp
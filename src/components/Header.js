import React, { Component } from 'react';
import HeaderTop from './HeaderTop';
import { Nav, Navbar, Container } from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class HeaderPart extends Component {
  render() {
    return (
      <div>
        <div>
        <HeaderTop />
        </div>
        <div>
        <Navbar style={{ height: '10vw' }} collapseOnSelect expand="lg"  bg='info'variant="light">
          <Container>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Vegan">Vegan</Nav.Link>
                <Nav.Link href="#Gluten-Free">Gluten-Free</Nav.Link>
                <Nav.Link href="#All Recipes">All Recipes</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home">Minimalist Baker</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link eventKey={2} href="#Shop">
                  Shop
                </Nav.Link>
                <Nav.Link href="#Cookbook">Cookbook</Nav.Link>
                <Nav.Link href="#Blogger Resources">Blogger Resources</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          
        </Navbar>
        <hr  style={{ height: '4px', color: 'black',marginTop: '0px' }} />
        </div>
       
        
      </div>
    )
  }
}

export default HeaderPart;



// {/* <div>




// <a style={{width: '10px', heghit: '20px'}} href="#"><i class="fab fa-facebook-f"></i></a>


// <a href="#"><i class="fab fa-twitter"></i></a>




// <a href="#"><i class="fab fa-instagram"></i></a>




// <a href="#"><i class="fab fa-pinterest"></i></a>


// </div>
//  */}

// // </Navbar>
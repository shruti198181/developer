import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";

function NavbarHeader() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>      
      <Navbar
        expand="lg"
        style={{ height: '70px', width: '100%', backgroundColor: 'whitesmoke' }}
        className="shadow-md fixed-top"
      >
        <Container> 
          <Navbar.Brand
            as={NavLink}
            to="/home"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '200px' }}
          >
            <img
              src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/6306307f49e9a8da9dd057b3_Taln-logo.webp"
              alt="logo"
              style={{ height: '50px', objectFit: 'contain' }}
            />
          </Navbar.Brand>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />         
          <div className="d-none d-lg-flex w-100">
          
            <Nav className="d-flex justify-content-center alignment-center mb-2" style={{marginLeft:"100px"}}>
              <Nav.Link as={NavLink} to="/tech-consults" className='ms-2'>
                Tech Consults
              </Nav.Link>
              <Nav.Link as={NavLink} to="/become-partner" className='ms-2'>
                Become a Partner
              </Nav.Link>
              <Nav.Link as={NavLink} to="/technologies" className='ms-2  border-end'>
                Technologies <MdKeyboardArrowDown />

              </Nav.Link>
            </Nav>
           
            <div className="d-flex justify-content-center ms-3">
              <Button
                style={{
                  fontSize: '15px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  backgroundColor: 'lightgreen',
                  color: 'white',
                  border: 'none',
                }}
              >
                HIRE DEVELOPERS
              </Button>
            </div>
          </div>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <div className="w-100 border-bottom"></div>
        <Offcanvas.Body>
          
          <div className="d-flex flex-wrap text-center">
            <div className="w-50 p-2">
              <Nav.Link as={NavLink} to="/tech-consults" onClick={handleClose}>
                Tech Consults
              </Nav.Link>
            </div>
            <div className="w-50 p-2">
              <Nav.Link as={NavLink} to="/become-partner" onClick={handleClose}>
                Become a Partner
              </Nav.Link>
            </div>

            <div className="w-50 p-2">
              <Nav.Link as={NavLink} to="/technologies" onClick={handleClose}>
                Technologies
              </Nav.Link>
            </div>
            <div className="w-50 p-2">
              <Button
                style={{
                  fontSize: '15px',
                  borderRadius: '8px',
                  fontWeight: 'lighter',
                  backgroundColor: 'lightgreen',
                  color: 'white',
                  width: '100%',
                  border: 'none',
                }}
                onClick={handleClose}
              >
                HIRE DEVELOPERS
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default NavbarHeader;

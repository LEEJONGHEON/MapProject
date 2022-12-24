import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
 
    <Navbar bg="light" expand="lg">
      <Container className='nav' fluid >
        <Navbar.Brand href="Mainpage"><i class="fa-solid fa-house"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" navbarScroll>
          <Nav className="me-auto">
            <Nav.Link href="Emergency">응급실</Nav.Link>
            <Nav.Link href="Hospital">병원</Nav.Link>
            <Nav.Link href="Aed">자동제세동기(AED)</Nav.Link>
             
             
            {/* 각각 영상 및 사용설명 주소 따로 작성하기 */}
            <NavDropdown title="응급처치방법" >
              <NavDropdown.Item href="Rescue">자동제세동기(AED)</NavDropdown.Item>
              <NavDropdown.Item href="Rescue">인명구조함</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link href="MapPicture">지도</Nav.Link>
            <Nav.Link href="Board">공익신고</Nav.Link>
            <Nav.Link href="Search">구역검색</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>

  );
}

export default Navigation;
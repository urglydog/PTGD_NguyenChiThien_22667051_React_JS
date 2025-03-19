// import { Link } from "react-router-dom";
// import { Button, Navbar, Nav } from "react-bootstrap";
import '../css/Header.css';
const Header = () => {
  return (
        <>
{/* 
// <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="/">Restaurant ABC</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="navbarNav" />
    //   <Navbar.Collapse id="navbarNav">
    //     <Nav className="me-auto">
    //       <Link to="/" className="nav-link">Trang chủ</Link>
    //       <Link to="/menu" className="nav-link">Thực đơn</Link>
    //       <Link to="/contact" className="nav-link">Liên hệ</Link>
    //     </Nav>
    //     <Button variant="primary">Book Table</Button>
    //   </Navbar.Collapse>
    // </Navbar> */}

    <div  className='header'>
        <h1>Restaurant ABC</h1>
        <nav>
            <ul>
                {/* <li><Link to="/">Trang chủ</Link></li>
                <li><Link to="/menu">Thực đơn</Link></li>
                <li><Link to="/contact">Liên hệ</Link></li> */}

                <li><a href="">Trang chủ</a></li>
                <li><a href="">Thực đơn</a></li>
                <li><a href="">Liên hệ</a></li>
            </ul>
        </nav>

        <button variant="primary">Book Table</button>
    </div>
        </>
    );
};

export default Header;






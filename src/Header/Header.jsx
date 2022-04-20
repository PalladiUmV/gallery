import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

import img from './img.jpg'


const Header = () => {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" expand="" collapseOnSelect>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    <Nav.Link>
                        <img src={img} width="70px" height="70px" alt="zxc" />
                    </Nav.Link>
                    <Nav.Link>
                        Vadim
                    </Nav.Link>
                    <Nav.Link>
                        vadim.hugaev@mail.ru
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/"} >Галерея</Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>Обо мне</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default Header;
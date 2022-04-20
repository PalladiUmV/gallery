import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import img from './img.jpg'

const Header = () => {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" expand="" collapseOnSelect>
                <Navbar.Toggle className="m-2" />
                <Navbar.Collapse>
                    <Nav.Link>
                        <img src={img} width="70px" height="70px" alt="zxc" />
                    </Nav.Link>
                    <Nav.Item>
                        <Navbar.Text className="ms-3">
                            Vadim
                        </Navbar.Text>
                    </Nav.Item>
                    <Nav.Item>
                        <Navbar.Text className="ms-3">
                            vadim.hugaev@mail.ru
                        </Navbar.Text>
                    </Nav.Item>
                    <Nav.Link as={Link} to={"/gallery"} >Галерея</Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>Обо мне</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default Header;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Point of Sale</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features">Home</Nav.Link>
						<Nav.Link href="#pricing">Products</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">Cart</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Contacts
						</Nav.Link>
						<NavDropdown title="Profile" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								Profile Info
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;

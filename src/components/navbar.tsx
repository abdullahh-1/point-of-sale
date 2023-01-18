import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./searchbar";

function NavBar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">Point of Sale</Navbar.Brand>
				<SearchBar></SearchBar>
				<div className="mx-auto"></div>
			</Container>
		</Navbar>
	);
}

export default NavBar;

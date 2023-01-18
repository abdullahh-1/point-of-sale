import React from "react";
import logo from "./logo.svg";
import NavBar from "./components/navbar";
import "./App.css";
import Sidebar from "./components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products";

function App() {
	return (
		<div className="App">
			<NavBar></NavBar>
			<Sidebar />
			{/* <Products ProductName={"product"} ProductType={"type"} ProductPrice={15} /> */}
		</div>
	);
}

export default App;

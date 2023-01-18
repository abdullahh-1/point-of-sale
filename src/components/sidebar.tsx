import React from "react";
import "./sidebar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Sidebar: React.FC = () => {
	return (
		<aside className="bg-dark text-white p-4 h-screen">
			<nav>
				<ul className="list-none">
					<li className="py-2">
						<a
							href=""
							className="hover:bg-gray-800 hover:text-gray-200 text-gray-400 block"
						>
							Home
						</a>
					</li>
					<li className="py-2">
						<a
							href=""
							className="hover:bg-gray-800 hover:text-gray-200 text-gray-400 block"
						>
							Reservation
						</a>
					</li>
					<li className="py-2">
						<a
							href=""
							className="hover:bg-gray-800 hover:text-gray-200 text-gray-400 block"
						>
							Menu
						</a>
					</li>
					<li className="py-2">
						<a
							href=""
							className="hover:bg-gray-800 hover:text-gray-200 text-gray-400 block"
						>
							Delivery
						</a>
					</li>
					<li className="py-2">
						<a
							href=""
							className="hover:bg-gray-800 hover:text-gray-200 text-gray-400 block"
						>
							Accounting
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;

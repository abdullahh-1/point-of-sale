import React from "react";
import "./sidebar.css";
import { Button } from "react-bootstrap";

const Sidebar: React.FC = () => {
	return (
		<aside className="bg-dark text-white p-4 h-screen">
			<nav>
				<ul className="list-none">
					<li className="py-2">
						<Button className="bg-dark border-white-700 hover:bg-gray-800 hover:text-gray-200 text-gray-400 block ">
							Home
						</Button>
					</li>
					<li className="py-2">
						<Button className="bg-dark hover:bg-gray-800 hover:text-gray-200 text-gray-400 block">
							Reservation
						</Button>
					</li>
					<li className="py-2">
						<Button className="bg-dark hover:bg-gray-800 hover:text-gray-200 text-gray-400 block">
							Menu
						</Button>
					</li>
					<li className="py-2">
						<Button className="bg-dark hover:bg-gray-800 hover:text-gray-200 text-gray-400 block">
							Delivery
						</Button>
					</li>
					<li className="py-2">
						<Button className="bg-dark hover:bg-gray-800 hover:text-gray-200 text-gray-400 block">
							Accounting
						</Button>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;

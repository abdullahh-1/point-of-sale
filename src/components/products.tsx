import { Paper } from "@mui/material";
import { useState } from "react";

interface ProductProps {
	ProductName: (name: string) => string;
	ProductPrice: (price: number) => number;
	ProductType: (type: string) => string;
}

function Products({ ProductName, ProductPrice, ProductType }: ProductProps) {
	return (
		<div>
			<Paper elevation={10} variant="outlined" square />
		</div>
	);
}

export default Products;

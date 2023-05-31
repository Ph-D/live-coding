import { Link } from "react-router-dom";

function Products({products}: {products: any[]}) {
	return (
		<>
			<div>Products</div>
			{products.map((product) => (
				<div key={product.id}>

					<Link to={`/products/${product.id}`}>{product.title}</Link>
					
					<h3>{product.title}</h3>
					<p>{product.description}</p>
					<p>{product.price}</p>
				</div>
			))}
		</>
	);
}

export default Products;

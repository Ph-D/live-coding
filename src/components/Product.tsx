import { useParams } from "react-router-dom"
import { CartContext } from "../context";
import { useContext } from "react";

function Product({ products}: {products: any[]}) {
	
	const id = useParams().id;
	const product = products.find((product) => product.id === Number(id));
	const cartContext = useContext(CartContext);
	console.log(cartContext)

	const handleAddToCart = () => {
		cartContext.addToCart(product);
	}

	const handleDeleteItem = () => {
		cartContext.deleteItem(product.id);
	}

	return (
		<>
		<div>Product</div>
		<p>{product.title}</p>
		<p>{product.price}</p>
		<button onClick={handleAddToCart}>Add to Cart</button>
		<button onClick={handleDeleteItem}>Delete Product</button>
		</>
	)
}

export default Product
import React, {createContext, useState} from 'react';

interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
}

interface CartContext {
	addToCart: (product: Product) => void;
	deleteItem: (id: number) => void;	
	cart: Product[];
}

export const CartContext = createContext<CartContext>({
	addToCart: () => undefined,
	deleteItem: () => undefined,
	cart: [],
});

interface Props {
	children: React.ReactNode;
}


export default function Cart({children}: Props) {
	const [cart, setCart] = useState<Product[]>([]);

	const addToCart = (product: Product) => {
		setCart([...cart, product]);
	};

	const deleteItem = (id: number) => {
		const newCart = cart.filter((item) => item.id !== id);
		setCart(newCart);
	}

	const value = {
		addToCart,
		deleteItem,
		cart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

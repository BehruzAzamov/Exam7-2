import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        setQuantity(quantity + 1);
        dispatch(addToCart({ ...product, quantity: quantity + 1 }));
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
        dispatch(addToCart({ ...product, quantity: quantity + 1 }));
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            dispatch(addToCart({ ...product, quantity: quantity - 1 }));
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={product.image.desktop}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
                {quantity === 0 ? (
                    <button
                        className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                ) : (
                    <div className="mt-2 flex items-center">
                        <button
                            className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                            onClick={handleDecrease}
                        >
                            -
                        </button>
                        <span className="mx-2">{quantity}</span>
                        <button
                            className="bg-green-500 text-white py-1 px-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                            onClick={handleIncrease}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductItem;

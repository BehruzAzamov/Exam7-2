import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';

const ProductList = () => {
  const { items = [], status, error } = useSelector(state => state.products);

  console.log("ProductList state:", { items, status, error });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='text-black mb-4 font-bold text-4xl'>Desserts</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
        {items.length > 0 ? (
          items.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;

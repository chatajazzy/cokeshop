import React from 'react';
import ProductListItem from './ProductListItem';
import ProductSorter from './ProductSorter';

const ProductList = (props) => {
  const products = props.products.map((product) =>
    <ProductListItem
      key={product.id}
      productData={product}
      addToCart={() => props.addToCart(product.id)}
    />
  );
  return (
    <div className="product-list__container">
    <div className="product-list__topbar">
        <h2 className="title">Products</h2>
        <ProductSorter
          productsSortedBy={props.productsSortedBy}
          handleSorting={(e) => props.handleSorting(e)}
        />
      </div>
      <ul className="product-list">
       {products}
      </ul>
    </div>
  )
}

export default ProductList;

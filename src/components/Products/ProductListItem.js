import React from 'react';
import { formatPrice } from '../../helpers';

const ProductListItem = (props) => {
  const { image, name, price } = props.productData;
  return (
    <div className="product-list-item">
      <img src={image} className="product-list-item__img" />
      <a href="#"className="product-list-item__name">
        {name}
      </a>
      <div className="product-list-item__price">
        {formatPrice(price)}
      </div>
      <button
        type="button"
        className="product-list-item__add-to-cart"
        onClick={props.addToCart}
      >Add to cart</button>
    </div>
  )
}

export default ProductListItem;

import React from 'react';
import { formatPrice } from '../../helpers';

const CartItem = (props) => {
  const { id, image, name, price, qty } = props.cartItemData;

  return (
    <div className="cart-item">
      <img src={image} className="cart-item__img" />
      <a href="#" className="cart-item__name">
        {name}
      </a>
      <div className="cart-item__qty">
        {qty}
      </div>
      <form onSubmit={props.handleQtySubmit} className="cart-item__form">
        <input type="number"
          onChange={(e) => props.handleQtyChange(e)}
          name={id}
          value={qty}
          className="cart-item__input"
        />
        <div className="cart-item__btns">
          <button
            type="button"
            className="cart-item__btn"
            onClick={props.addeCartItem}
          >+</button>
          <button
            type="button"
            className="cart-item__btn"
            onClick={props.removeCartItem}
          >-</button>
        </div>
      </form>
      <div class="cart-item__price">
        {formatPrice(price)}
      </div>
    </div>
  )
}

export default CartItem;

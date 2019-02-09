import React from 'react';
import CartItem from './CartItem';
import { formatPrice } from '../../helpers';

const CartItemsList = (props) => {
  if (props.cartItems.length > 0) {
    const cartItems = props.cartItems.map((cartItem) =>
      <CartItem
        key={cartItem.id}
        cartItemData={cartItem}
        addeCartItem={() => props.addCartItem(cartItem.id)}
        removeCartItem={() => props.removeCartItem(cartItem.id)}
        handleQtyChange={(e) => props.handleQtyChange(e)}
        handleQtySubmit={(e) => props.handleQtySubmit(e)}
      />
    );
      return (
        <ul className="cart-items-list">
          <h2>Cart</h2>
          {cartItems}
          <div className="cart__summary">
            {formatPrice(props.cartSummary)}
          </div>
        </ul>
      )
  }
  else {
    return (
      <p>
       Your cart is empty at this moment
      </p>
    )
  }
}

export default CartItemsList;

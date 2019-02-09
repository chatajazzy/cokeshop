import React from 'react';

const CartToggleBtn = (props) => {
  return (
    <button
      type="button"
      onClick={() => props.handleCart()}
      className="cart-toggle-btn">
      {props.isCartOpen ? 'Close cart' : 'Open cart'}
    </button>
  )
}

export default CartToggleBtn;

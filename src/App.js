import React, { Component } from 'react';
import './App.scss';
import CartItemsList from './components/Cart/CartItemsList';
import CartToggleBtn from './components/Cart/CartToggleBtn';
import ProductList from './components/Products/ProductList';
import products from './products';

class App extends Component {
  state = {
    products: products,
    productsSortedBy: 'name',
    isCartOpen: false,
    cartItems: [],
    cartSummary: 0,
  }
  sortByProperty = (property) => {
    let newProductsArray;
    if (property === 'name') {
      newProductsArray = this.state.products.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
    else if (property === 'price') {
      newProductsArray = this.state.products.sort((a, b) => (a.price > b.price) ? 1 : -1);
    }
    this.setState({
      products: newProductsArray,
      productsSortedBy: property
    })
  }
  handleSorting = (e) => {
     return e.target.value && this.sortByProperty(e.target.value);
  }
  handleCart = () => {
    if (this.state.isCartOpen) {
      this.setState({
        isCartOpen: false
      })
    }
    else {
      this.setState({
        isCartOpen: true
      })
    }
  }
  addToCart = (productId) => {
    const productObj = this.state.cartItems.find((item) => item.id === productId);

    if (productObj) {
      productObj.qty++;
      this.setState({
        cartSummary: this.state.cartSummary + productObj.price
      })
    }
    else {
      const newProduct = this.state.products.find((product) => product.id === productId);
      newProduct.qty = 1;
      this.setState({
        cartItems: [...this.state.cartItems, newProduct],
        cartSummary: this.state.cartSummary + newProduct.price
      })
    }

    this.setState({
      isCartOpen: true
    })
  }
  removeCartItem = (itemId) => {
    const itemObj = this.state.cartItems.find((item) => item.id === itemId);

    if (itemObj && itemObj.qty > 1) {
      itemObj.qty--;
      this.setState({
        cartSummary: this.state.cartSummary - itemObj.price
      })
    }
    else {
      const newItemsArray = this.state.cartItems.filter((item) => item.id !== itemId);
      this.setState({
        cartItems: newItemsArray,
        cartSummary: this.state.cartSummary - itemObj.price
      })
    }
  }
  handleQtySubmit = (e) => {
    e.preventDefault();
    this.handleQtyChange(e);
  }
  handleQtyChange = (e) => {
   const itemObj = this.state.cartItems.find((item) => item.id === e.target.name);

    if (itemObj) {
      let qtyChange = (e.target.value - itemObj.qty);
      itemObj.qty = e.target.value;
      this.setState({
        cartSummary: this.state.cartSummary + (itemObj.price * qtyChange)
      })
    }
  }
  componentDidMount() {
    this.sortByProperty(this.state.productsSortedBy);
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-header__heading">
            <a className="app-logo" href="#">Cokeshop</a>
          </h1>
        </header>
        <CartToggleBtn handleCart={this.handleCart} isCartOpen={this.state.isCartOpen}/>
        {(this.state.isCartOpen) ?
          <CartItemsList
            cartSummary={this.state.cartSummary}
            cartItems={this.state.cartItems}
            addCartItem={this.addToCart}
            removeCartItem={this.removeCartItem}
            handleQtyChange={this.handleQtyChange}
            handleQtySubmit={this.handleQtySubmit}
          />
        : null}
        <ProductList products={this.state.products} addToCart={this.addToCart} productsSortedBy={this.state.productsSortedBy} handleSorting={this.handleSorting}/>
      </div>
    );
  }
}

export default App;

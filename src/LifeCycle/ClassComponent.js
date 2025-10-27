import React from "react";
import ProductList from "./ProductList";
import "./Cart.css";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      message: "",
    };
  }

  // ➕ Add item
  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  // Delete item
  removeFromCart = (index) => {
    this.setState((prevState) => {
      const updatedCart = [...prevState.cart];
      updatedCart.splice(index, 1);
      return { cart: updatedCart };
    });
  };

  render() {
    return (
      <div className="app-container">
        <h1>🛒 Add / Remove from Cart</h1>
        <p className="message">{this.state.message}</p>
        <div className="content-container">
          {/* Left Side - Products */}
          <div className="left-panel">
            <ProductList addToCart={this.addToCart} />
          </div>

          {/* Right Side - Cart */}
          <div className="right-panel">
            <div className="cart-card">
              <h2>🧾 Your Cart ({this.state.cart.length})</h2>
              {this.state.cart.length === 0 ? (
                <p>No items added yet</p>
              ) : (
                <ul>
                  {this.state.cart.map((item, index) => (
                    <li key={index}>
                      {item.name} - $ {item.price}
                      <button
                        className="remove-btn"
                        onClick={() => this.removeFromCart(index)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassComponent;

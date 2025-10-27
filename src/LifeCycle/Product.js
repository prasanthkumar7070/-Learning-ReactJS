import React from "react";

class Product extends React.Component {
  handleAdd = () => {
    this.props.addToCart(this.props.product);
  };

  render() {
    const { name, price } = this.props.product;
    return (
      <div className="product-card">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <button onClick={this.handleAdd}>Add to Cart</button>
      </div>
    );
  }
}

export default Product;    

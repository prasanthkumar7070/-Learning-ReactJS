import React from "react";
import Product from "./Product";
import './Cart.css'

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  // ✅ Lifecycle - Mount (simulate API call)
  componentDidMount() {
    console.log("ProductList Mounted ✅");

    // Simulate data fetching
    setTimeout(() => {
      this.setState({
        products: [
          { id: 1, name: "Laptop", price: 1000 },
          { id: 2, name: "Phone", price: 600 },
          { id: 3, name: "Headphones", price: 150 },
          { id: 4, name: "Smartwatch", price: 200 },
        ],
      });
    }, 1000);
  }

  // ✅ Lifecycle - Unmount
  componentWillUnmount() {
    console.log("ProductList will unmount ❌");
  }

  render() {
    const { addToCart } = this.props;
    return (
      <div>
        <h2>Available Products</h2>
        <div className="product-list">
          {this.state.products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            this.state.products.map((p) => (
              <Product key={p.id} product={p} addToCart={addToCart} />
            ))
          )}   
        </div>
      </div>
    );
  }
}

export default ProductList;

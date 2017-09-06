import React, { Component } from 'react';

class ProductDetails extends Component {
    render() {
        const productID = this.props.match.params.id;
        return (
            <h1>this is product details! The product ID is {productID}</h1>
        );
      }
}

export default ProductDetails;
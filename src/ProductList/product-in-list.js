import React, { Component } from 'react';

class ProductInList extends Component {
    render() {
        const product = this.props.product;
        return (
            <div className="product list">
                <div className="productThumbnail">
                    <img className="productThumbnailImage" src={product.thumbnailURL} alt="product thumbnail"/>
                </div>
                <div className="productInfo">
                    <div><label className="productName">{product.name}</label></div>
                    <span className="productDescription">{product.description}</span>
                </div>
                <div className="placeAnOrder">
                    <button className="btnPlaceAnOrder" onClick={() => this.props.onClick()}>Place an order ></button>
                </div>
                <hr />
            </div>     
        );
      }
}

export default ProductInList;
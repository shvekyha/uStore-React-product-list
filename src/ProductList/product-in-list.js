import React, { Component } from 'react';

class ProductInList extends Component {
    render() {
        return (
            <div className="product list">
                <div className="productThumbnail">
                    <img className="productThumbnailImage" src="" alt="product thumbnail"/>
                </div>
                <div className="productInfo">
                    <div><label className="productName">Product 1</label></div>
                    <span className="productDescription">Product 1 Description</span>
                </div>
                <div className="placeAnOrder">
                    <button className="btnPlaceAnOrder">Place an order ></button>
                </div>
                <hr />
            </div>     
        );
      }
}

export default ProductInList;
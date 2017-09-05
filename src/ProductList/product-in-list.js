import React, { Component } from 'react';

class ProductInList extends Component {
    render() {
        
        return (
            <div className="product list">
                <div className="productThumbnail">
                    <img className="productThumbnailImage" src={this.props.product.thumbnailURL} alt="product thumbnail"/>
                </div>
                <div className="productInfo">
                    <div><label className="productName">{this.props.product.name}</label></div>
                    <span className="productDescription">{this.props.product.description}</span>
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
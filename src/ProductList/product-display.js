import React, { Component } from 'react';
import ProductInList from './product-in-list';
import ProductInGrid from './product-in-grid';

class ProductDisplay extends Component{
    render(){
        let productDisplay = null;
        productDisplay = this.props.currentView === 'list'?
            <ProductInList product={this.props.product}/> :
            <ProductInGrid product={this.props.product}/>;

        return(
            <span>
                {productDisplay}
                {(parseInt(this.props.index, 10) % 3 === 0? <div><br /></div> : '') }
            </span>
        );
    }
}

export default ProductDisplay;
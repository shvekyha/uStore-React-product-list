import React, { Component } from 'react';
import ProductInList from './product-in-list';

class ProductsContainer extends Component{
    render(){
        let listItems = [];
        if (this.props.group){
            const productList = this.props.group.productList;
            listItems = productList.map(
                (product) =>
                    <ProductInList key={product.id} product={product}/>
            );
        }
        return (
            <section className="productsContainer">
                <div className="cbDisplayGrid">
                    <label>
                        <input type="checkbox" />Display products in grid
                    </label>
                </div>
                {listItems}
            </section>
        );
    }
}

export default ProductsContainer;
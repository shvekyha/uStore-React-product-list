import React, { Component } from 'react';
import ProductInList from './product-in-list';

class ProductsContainer extends Component{
    render(){
        return (
            <section className="productsContainer">
                <div className="cbDisplayGrid">
                    <label>
                        <input type="checkbox" />Display products in grid
                    </label>
                </div>
                <ProductInList />
            </section>
        );
    }
}

export default ProductsContainer;
import React, { Component } from 'react';
import GroupList from './group-list';
import GroupTitle from './group-title';
import ProductsContainer from './products-container';

class Main extends Component{
    render(){
        return (
            <section className="main">
                <GroupList />
                <section className="productsSection innerSection">
                    <GroupTitle />
                    <ProductsContainer />
                </section>
            </section>
        );
    }
}

export default Main;
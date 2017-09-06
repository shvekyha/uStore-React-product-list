import React, { Component } from 'react';
import './App.css';
import Header from './ProductList/header';
import ProductList from './ProductList/product-list';
import { Switch, Route } from 'react-router-dom';
import ProductDetails from './ProductList/product-details';

class App extends Component {
  render() {
    return (
      <section className="mainPageArea">
          <Header />
          <Switch>
            <Route exact path='/' component={ProductList}/>
            <Route path='/productList' component={ProductList}/>
            <Route path='/productDetails/:id' component={ProductDetails}/>
          </Switch>
      </section>
    );
  }
}

export default App;

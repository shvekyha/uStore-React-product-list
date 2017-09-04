import React, { Component } from 'react';
import './App.css';
import Header from './ProductList/header';
import ProductList from './ProductList/product-list';

class App extends Component {
  render() {
    return (
      <section className="mainPageArea">
          <Header />
          <ProductList />
      </section>
    );
  }
}

export default App;

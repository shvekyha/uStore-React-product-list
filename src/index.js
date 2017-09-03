import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './ProductList/product-list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProductList />, document.getElementById('root'));
registerServiceWorker();

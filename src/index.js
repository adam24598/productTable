import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ProductTable from './ProductTable';

const array =[
  {name : 'hp 24f display',price:'460',category: 'Electronics'},
  {name : 'PC Portable HP ',price:'699',category: 'Electronics'},
  {name : 'Boardshort' ,price:'15',category: 'Clothes'},
  {name : 'Tee-Shirt ',price:'39',category: 'Clothes'}
]
ReactDOM.render(
  
    <ProductTable prtable={array} />,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

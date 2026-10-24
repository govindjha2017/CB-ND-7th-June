import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Card from './Card';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Card/>
    <h1>Hello world!</h1>
    <p>temp para</p>
    {/* {App()}
    {App()}
    {App()}
    <App></App> */}
    <App/>
  </>
   
);


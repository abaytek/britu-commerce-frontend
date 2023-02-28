import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Register, Login, Product, NotFound, Cart } from './pages';

export class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;

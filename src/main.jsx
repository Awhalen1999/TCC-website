import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import RugInfoPage from './pages/rug-info/RugInfoPage';
import ShopPage from './pages/shop/ShopPage';
import ProductCarePage from './pages/product-care/ProductCarePage';
import ContactPage from './pages/contact/ContactPage';
import Nav from './Nav';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/rug-info' element={<RugInfoPage />} />
        <Route path='/product-care' element={<ProductCarePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

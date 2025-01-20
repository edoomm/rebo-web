import React from 'react';
import HeaderBar from '../Header and Footer/HeaderBar';
import Footer from '../Header and Footer/Footer';
import ProductsSection from '../Sections/ProductsSection';
import MidSection from '../Sections/MidSection';

function ProductsPage() {
  return (
    <div className="ProductsBody">
      
        <HeaderBar/>
      
      
      <ProductsSection/>
      <MidSection/>
      <Footer/>
    </div>
  );
}

export default ProductsPage;

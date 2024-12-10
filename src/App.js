
import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ProductForm from './components/ProductForm';

const App = () => {
  const [products, setProducts] = useState([
    { name: 'Widget A', status: 'Manufactured', updatedAt: '2024-12-1 10:00 AM' },
    { name: 'Gadget B', status: 'In Transit', updatedAt: '2024-11-29 3:00 PM' },
  ]);

  const handleAddProduct = (product) => {
    setProducts([product, ...products]);
  };

  return (
    <div className="font-sans">
      <Header />
      <Dashboard products={products} />
      <ProductForm onAddProduct={handleAddProduct} />
    </div>
  );
};

export default App;

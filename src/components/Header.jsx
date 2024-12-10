// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="bg-primary text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Supply Chain Management</h1>
                <nav>
                    <a href="#dashboard" className="px-4 py-2 hover:underline">Dashboard</a>
                    <a href="#add-product" className="px-4 py-2 hover:underline">Add Product</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;

// src/components/Dashboard.jsx
import React from 'react';

const Dashboard = ({ products }) => {
    return (
        <section id="dashboard" className="p-8 bg-background">
            <h2 className="text-2xl font-bold mb-4">Product Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
                    >
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-600">Status: {product.status}</p>
                        <p className="text-sm text-gray-600">Last Updated: {product.updatedAt}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Dashboard;

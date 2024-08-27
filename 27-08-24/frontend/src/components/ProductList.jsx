import React from 'react';
import '../App.css'; 

const ProductList = ({ searchResults, onEdit, onDelete }) => {
    return (
        <div className="product-list-container">
            {searchResults.length === 0 ? (
                <p className="no-products-message">No products found.</p>
            ) : (
                <div className="products-container">
                    {searchResults.map(product => (
                        <div key={product._id} className="product-card">
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-price">Price: ${product.price}</p>
                            <p className="product-availability">Availability: {product.availability}</p>
                            <button 
                                onClick={() => onEdit(product._id)}
                                className="edit-button"
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => onDelete(product._id)}
                                className="delete-button"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;

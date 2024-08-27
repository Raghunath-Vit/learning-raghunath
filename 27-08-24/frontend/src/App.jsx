import React, { useState } from 'react';
import ProductList from './components/ProductList';
import SearchForm from './components/SearchForm';
import ProductForm from './components/ProductForm';
import axios from 'axios';

const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);
    

    const fetchSearchResults = () => {
        axios.get('http://localhost:3000/products')
            .then(response => setSearchResults(response.data))
            .catch(error => console.error(error));
    };

    const handleSearchResults = (results) => {
        setSearchResults(results);
    };

    const handleCreateProduct = () => {
        setEditingProductId(null);
        
    };

    const handleEditProduct = (id) => {
        setEditingProductId(id);
        
    };

    const handleProductSaved = () => {
        
        setEditingProductId(null);
        fetchSearchResults(); 
    };

    const handleCancel = () => {
        
        setEditingProductId(null);
    };

    return (
        <div>
            <h1>Product Management</h1>
            <ProductForm
                    productId={editingProductId}
                    onProductSaved={handleProductSaved}
                    onCancel={handleCancel}
                />
            <SearchForm onSearchResults={handleSearchResults} />
            <button onClick={handleCreateProduct}>Add New Product</button>
            <ProductList searchResults={searchResults} onEdit={handleEditProduct} />
            
        </div>
    );
};

export default App;








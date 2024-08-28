import React, {useState} from "react";
import { ProductForm, ProductList, SearchForm } from "./components";
import axios from "axios";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);

  function fetchSearchResults() {
    axios
      .get("http://localhost:3000/products")
      .then(function(response) {
        setSearchResults(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  function handleSearchResults(results) {
    setSearchResults(results);
  }

  function handleCreateProduct() {
    setEditingProductId(null);
  }

  function handleEditProduct(id) {
    setEditingProductId(id);
  }

  function handleProductSaved() {
    setEditingProductId(null);
    fetchSearchResults();
  }

  function handleCancel() {
    setEditingProductId(null);
  }

  function handleDeleteProduct(id) {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(function() {
        fetchSearchResults();
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm
        productId={editingProductId}
        onProductSaved={handleProductSaved}
        onCancel={handleCancel} />
      <SearchForm onSearchResults={handleSearchResults} />
      <ProductList
        searchResults={searchResults}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct} />
    </div>
  );
}

export default App;

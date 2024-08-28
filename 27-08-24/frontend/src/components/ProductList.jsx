import React from "react";
import PropTypes from "prop-types";
import "../App.css";



ProductList.propTypes = {
	searchResults: PropTypes.arrayOf(
			PropTypes.shape({
					_id: PropTypes.string.isRequired,
					name: PropTypes.string.isRequired,
					price: PropTypes.number.isRequired,
					availability: PropTypes.string.isRequired,
			})
	).isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

function ProductList({searchResults, onEdit, onDelete}) {
  function handleEdit(productId) {
    onEdit(productId);
  }

  function handleDelete(productId) {
    onDelete(productId);
  }

  return (
    <div className="product-list-container">
      {searchResults.length === 0 ? (
        <p className="no-products-message">No products found.</p>
      ) : (
        <div className="products-container">
          {searchResults.map(function (product) {
            return (
              <div key={product._id} className="product-card">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-availability">
                  Availability: {product.availability}
                </p>
                <button
                  onClick={function () {
                    handleEdit(product._id);
                  }}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={function () {
                    handleDelete(product._id);
                  }}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductList;

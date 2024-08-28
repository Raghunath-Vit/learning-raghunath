import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../App.css";


ProductForm.propTypes = {
	productId: PropTypes.string,
	onProductSaved: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
};



function ProductForm({productId, onProductSaved, onCancel}) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    availability: "available",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(function () {
    fetchProducts();
  }, []);

  useEffect(
    function () {
      if (productId) {
        setIsEdit(true);
        axios
          .get(`http://localhost:3000/products/${productId}`)
          .then(function (response) {
            setProduct(response.data);
          })
          .catch(function (error) {
            console.error("Error fetching product:", error);
          });
      } else {
        setIsEdit(false);
        setProduct({name: "", price: "", availability: "available"});
      }
    },
    [productId]
  );

  async function fetchProducts() {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct({...product, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();

    var request;
    if (isEdit) {
      request = axios.put(
        `http://localhost:3000/products/${productId}`,
        product
      );
    } else {
      request = axios.post("http://localhost:3000/products", product);
    }

    request
      .then(function () {
        fetchProducts();
        onProductSaved();
      })
      .catch(function (error) {
        console.error("Error submitting product:", error);
      })
      .finally(function () {
        onCancel();
      });
  }

  return (
    <div className="product-form-container">
      <div className="form-section">
        <h2 className="form-title">
          {isEdit ? "Edit Product" : "Create Product"}
        </h2>
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <label className="form-label">
              Name:
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="form-input"
                required />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              Price:
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="form-input"
                required />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              Availability:
              <select
                name="availability"
                value={product.availability}
                onChange={handleChange}
                className="form-select"
              >
                <option value="available">Available</option>
                <option value="not-available">Not Available</option>
              </select>
            </label>
          </div>
          <div className="form-actions">
            <button type="submit" className="form-button">
              {isEdit ? "Update" : "Create"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="form-button form-button-cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Display Products */}
      <div className="product-list-section">
        <h2 className="list-title">Product List</h2>
        {products.length === 0 ? (
          <p className="no-products">No products found.</p>
        ) : (
          <div className="products-container">
            {products.map(function (product) {
              return (
                <div key={product._id} className="product-card">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">Price: ${product.price}</p>
                  <p className="product-availability">
                    Availability: {product.availability}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductForm;

// import axios from "axios";
// import React, { useEffect, useState, useCallback } from "react";
// import { Link, Outlet } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchProducts = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("http://localhost:3000/api/v1/products");
//       setProducts(response.data.products);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/v1/products/${productId}`);
//       fetchProducts();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <div className="container">
//       <Outlet />
//         <h1>Product List</h1>
//         <div className="product-list">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div key={product._id} className="product-item">
//                 <h2>{product.name}</h2>
//                 <p className="price">${product.price}</p>
//                 <Link to={`/Home/${product._id}`} className="details-link">
//                   Show Details
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(product._id)}
//                   className="delete-button"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p>No products available.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

//  export default Home;


import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Link, Outlet } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/v1/products');
      setProducts(response.data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/products/${productId}`);
      fetchProducts();
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => `$${row.price}`,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.description || 'No description',
      sortable: true,
    },
    {
      name: 'Actions',
      cell: row => (
        <div>
          <Link to={`/Home/${row._id}`} className="details-link">
            Show Details
          </Link>
          <button
            onClick={() => handleDelete(row._id)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <Outlet />
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <DataTable
        columns={columns}
        data={filteredProducts}
        pagination
        highlightOnHover
        subHeader
        subHeaderComponent={
          <span>
            Search: 
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </span>
        }
      />
    </div>
  );
};

export default Home;

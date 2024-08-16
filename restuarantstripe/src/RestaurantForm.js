import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RestaurantForm.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters long')
    .max(25, 'Name cannot exceed 25 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  status: Yup.boolean()
    .required('Status is required')
});

const RestaurantForm = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = () => {
    setLoading(true);
    axios.get('http://localhost:1337/api/restaurants')
      .then(response => {
        const restaurantsData = response.data.data.map(item => ({
          id: item.id,
          ...item.attributes
        }));
        setRestaurants(restaurantsData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching restaurants:', error);
        setLoading(false);
      });
  };

  const handleViewDetails = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setEditing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setSelectedRestaurant(null);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:1337/api/restaurants/${id}`)
      .then(() => {
        setRestaurants(restaurants.filter(r => r.id !== id));
        setSelectedRestaurant(null);
      })
      .catch(error => console.error('Error deleting restaurant:', error));
  };

  const handleFormSubmit = (values, { resetForm }) => {
    const method = editing ? 'put' : 'post';
    const url = editing 
      ? `http://localhost:1337/api/restaurants/${selectedRestaurant.id}` 
      : 'http://localhost:1337/api/restaurants';
  
    axios({
      method,
      url,
      headers: { 'Content-Type': 'application/json' },
      data: {
        data: values 
      }
    })
      .then(response => {
        fetchRestaurants();
        resetForm();
        setSelectedRestaurant(null);
        setEditing(false);
      })
      .catch(error => {
        console.error('Error saving restaurant:', error.response ? error.response.data : error.message);
      });
  };

  const handleCloseDetails = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>{editing ? 'Edit Restaurant' : 'Add Restaurant'}</h1>
        <Formik
          initialValues={selectedRestaurant || { name: '', email: '', status: false }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ resetForm }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter restaurant name"
                  className="form-control"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter restaurant email"
                  className="form-control"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="status" className="checkbox-label">Status:</label>
                <Field
                  type="checkbox"
                  id="status"
                  name="status"
                  className="checkbox-input"
                />
                <ErrorMessage name="status" component="div" className="error" />
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-button">
                  {editing ? 'Update' : 'Submit'}
                </button>
                {editing && (
                  <button 
                    type="button" 
                    className="cancel-button" 
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <h2>Restaurant List</h2>
      <div className="restaurant-list">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          restaurants.length > 0 ? (
            restaurants.map(restaurant => (
              <div key={restaurant.id} className="restaurant-item">
                <span>{restaurant.name}</span>
                <button 
                  className="details-button" 
                  onClick={() => handleViewDetails(restaurant)}
                >
                  Details
                </button>
                <button 
                  className="delete-button" 
                  onClick={() => handleDelete(restaurant.id)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No restaurants available</p>
          )
        )}
      </div>

      {/* Restaurant Details */}
      {selectedRestaurant && !editing && (
        <div className="restaurant-details">
          <h2>Restaurant Details</h2>
          <p><strong>Name:</strong> {selectedRestaurant.name}</p>
          <p><strong>Email:</strong> {selectedRestaurant.email}</p>
          <p><strong>Status:</strong> {selectedRestaurant.status ? 'Active' : 'Inactive'}</p>
          <button 
            className="edit-button" 
            onClick={handleEdit}
          >
            Edit
          </button>
          <button 
            className="delete-button" 
            onClick={() => handleDelete(selectedRestaurant.id)}
          >
            Delete
          </button>
          <button 
            className="close-button" 
            onClick={handleCloseDetails}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default RestaurantForm;

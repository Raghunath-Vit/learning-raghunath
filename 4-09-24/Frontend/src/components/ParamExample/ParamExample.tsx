import React from 'react';
import { useParams } from 'react-router-dom';
import './ParamExample.css'; // Import the CSS file

const ParamExample: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="param-example-container">
      <h2 className="param-example-heading">Parameter Example</h2>
      <div className="param-example-content">
        <p className="param-example-text">Parameter ID</p>
        <span className="param-example-id">{id}</span>
      </div>
    </div>
  );
};

export default ParamExample;

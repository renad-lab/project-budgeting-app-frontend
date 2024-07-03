import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Show.css";

const Show = () => {
  const [transaction, setTransaction] = useState({});
  const { index } = useParams();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_BASE_URL;

  // Function to handle deletion of a transaction
  const handleDelete = () => {
    fetch(`${API}/${index}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/transactions");
      })
      .catch((err) => console.error(err));
  };

  // Effect to fetch transaction details on component mount
  useEffect(() => {
    fetch(`${API}/${index}`)
      .then((res) => res.json())
      .then((data) => setTransaction(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="show-container">
      <h1 className="show-title">Transaction Details</h1>

      {transaction && (
        <div className="show-details">
          <p className="show-label">
            ID: <span className="show-value">{transaction.id}</span>
          </p>
          <p className="show-label">
            Date: <span className="show-value">{transaction.date}</span>
          </p>
          <p className="show-label">
            Description:{" "}
            <span className="show-value">{transaction.description}</span>
          </p>
          <p className="show-label">
            Amount: <span className="show-value">${transaction.amount}</span>
          </p>
          <p className="show-label">
            Quantity: <span className="show-value">{transaction.quantity}</span>
          </p>
          <p className="show-label">
            Unit: <span className="show-value">{transaction.unit}</span>
          </p>
          <p className="show-label">
            Entity: <span className="show-value">{transaction.entity}</span>
          </p>
          <p className="show-label">
            Best By: <span className="show-value">{transaction.best_by}</span>
          </p>
          <p className="show-label">
            Recurring:{" "}
            <span className="show-value">
              {transaction.recurring ? "Yes" : "No"}
            </span>
          </p>
          <p className="show-label">
            Origin: <span className="show-value">{transaction.origin}</span>
          </p>
          <p className="show-label">
            Roast Level:{" "}
            <span className="show-value">{transaction.roast_level}</span>
          </p>
        </div>
      )}

      <div className="show-actions">
        <Link to={`/transactions/${index}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Show;

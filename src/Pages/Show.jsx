import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Show.css";

const Show = () => {
  const [transaction, setTransaction] = useState({});
  const { index } = useParams();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_BASE_URL;

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

  useEffect(() => {
    fetch(`${API}/${index}`)
      .then((res) => res.json())
      .then((data) => setTransaction(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {transaction && (
        <div>
          <h1>Transaction Details</h1>
          <p>ID: {transaction.id}</p>
          <p>Date: {transaction.date}</p>
          <p>Description: {transaction.description}</p>
          <p>Amount: ${transaction.amount}</p>
          <p>Quantity: {transaction.quantity}</p>
          <p>Unit: {transaction.unit}</p>
          <p>Vendor: {transaction.entity}</p>
          <p>Best By: {transaction.best_by}</p>
          <p>Recurring: {transaction.recurring ? "Yes" : "No"}</p>
          <p>Origin: {transaction.origin}</p>
          <p>Roast Level: {transaction.roast_level}</p>

          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Show;

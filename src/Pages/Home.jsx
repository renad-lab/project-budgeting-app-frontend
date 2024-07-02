import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const API = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="transaction-container">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction-link">
          <Link to={`/transactions/${transaction.id}`}>
            {" "}
            {transaction.date}: {transaction.description}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

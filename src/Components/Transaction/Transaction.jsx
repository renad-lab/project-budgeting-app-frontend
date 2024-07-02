import React from "react";

const Transaction = ({ transaction }) => {
  if (!transaction) {
    return <p>No transaction data found</p>;
  }

  return (
    <div className="transaction-detail">
      <h2>Transaction Details</h2>
      <p>Date: {transaction.date}</p>
      <p>Description: {transaction.description}</p>
    </div>
  );
};

export default Transaction;

import React from "react";
import { Link } from "react-router-dom";

const Transactions = ({ transactions }) => {
  return (
    <>
      <div className="transactions-container">
        <h1>Transactions</h1>
        <div className="transaction-list">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <Link
                to={{
                  pathname: `/transactions/${transaction.id}`,
                  state: { transaction },
                }}
                className="transaction-link"
              >
                <span className="transaction-date">{transaction.date}</span>:{" "}
                <span className="transaction-description">
                  {transaction.description}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Transactions;

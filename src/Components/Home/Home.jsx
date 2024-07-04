import React, { useState, useEffect } from "react";
import Transactions from "../Transactions/Transactions";
import TransactionChart from "../TransactionChart/TransactionChart";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import "./Home.css";

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
  console.log(transactions, "transactions");

  return (
    <div className="home-container">
      <div className="content-container">
        <div className="transactions-table-container">
          <TransactionsTable transactions={transactions} />
        </div>
        <div className="charts-container">
          <h2>Charts</h2>
          <TransactionChart transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Home;

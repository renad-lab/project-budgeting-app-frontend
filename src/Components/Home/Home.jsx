// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   const [transactions, setTransactions] = useState([]);
//   const API = import.meta.env.VITE_BASE_URL;

//   useEffect(() => {
//     fetch(API)
//       .then((res) => res.json())
//       .then((data) => {
//         setTransactions(data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="transaction-container">
//       {transactions.map((transaction) => (
//         <div key={transaction.id} className="transaction-link">
//           <Link to={`/transactions/${transaction.id}`}>
//             {" "}
//             {transaction.date}: {transaction.description}
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transactions from "../Transactions/Transactions";
import TransactionChart from "../TransactionChart/TransactionChart";
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

  return (
    <div className="home-container">
      <Transactions transactions={transactions} />
      <div className="charts-container">
        <h2>Charts</h2>
        <TransactionChart />
      </div>
    </div>
  );
};

export default Home;

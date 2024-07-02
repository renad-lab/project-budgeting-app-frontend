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
import Transactions from "../Components/Transactions";
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
        {/* Insert charts content here */}
        <h2>Charts</h2>
        <p>This is where charts will appear.</p>
      </div>
    </div>
  );
};

export default Home;

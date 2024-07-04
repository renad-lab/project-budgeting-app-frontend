// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import "./TransactionChart.css";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const TransactionChart = () => {
//   const [transactionsData, setTransactionsData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:4001/transactions");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setTransactionsData(data); // Assuming data is an array of transactions from data.json
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const processData = (data) => {
//     if (!data) return { income: 0, expense: 0 };

//     const result = {
//       income: 0,
//       expense: 0,
//     };

//     data.forEach((transaction) => {
//       if (transaction.type === "income") {
//         result.income += Number(transaction.amount);
//       } else if (transaction.type === "expense") {
//         result.expense += Math.abs(Number(transaction.amount));
//       }
//     });

//     return result;
//   };

//   const { income, expense } = processData(transactionsData);
//   const netIncome = income - expense;
//   const netIncomeClass = netIncome >= 0 ? "positive" : "negative";

//   console.log("Processed data:", { income, expense });

//   const data = {
//     labels: ["Income", "Expense"],
//     datasets: [
//       {
//         label: "Amount ($)",
//         data: [income, expense],
//         backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
//         borderColor: ["rgb(75, 192, 192)", "rgb(255, 99, 132)"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "Amount ($)",
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: true,
//         text: "Income vs Expense",
//       },
//     },
//   };

//   console.log("Chart data:", data);

//   return (
//     <div className="transaction-chart">
//       <div className="chart-container">
//         {income === 0 && expense === 0 ? (
//           <p className="no-data">No transaction data available</p>
//         ) : (
//           <Bar options={options} data={data} />
//         )}
//       </div>
//       <div className="table-container">
//         <table className="data-table">
//           <thead>
//             <tr>
//               <th>Type</th>
//               <th>Total Amount ($)</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Income</td>
//               <td className="amount income">{income.toFixed(2)}</td>
//             </tr>
//             <tr>
//               <td>Expense</td>
//               <td className="amount expense">{expense.toFixed(2)}</td>
//             </tr>
//             <tr>
//               <td>Net Income</td>
//               <td className={`amount net-income ${netIncomeClass}`}>
//                 {netIncome.toFixed(2)}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TransactionChart;

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "./TransactionChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TransactionChart = () => {
  const [transactionsData, setTransactionsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4001/transactions");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTransactionsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const processData = (data) => {
    if (!data) return { income: 0, expense: 0 };

    const result = {
      income: 0,
      expense: 0,
    };

    data.forEach((transaction) => {
      if (transaction.type === "income") {
        result.income += Number(transaction.amount);
      } else if (transaction.type === "expense") {
        result.expense += Math.abs(Number(transaction.amount));
      }
    });

    return result;
  };

  const { income, expense } = processData(transactionsData);
  const netIncome = income - expense;
  const netIncomeClass = netIncome >= 0 ? "positive" : "negative";

  console.log("Processed data:", { income, expense });

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount ($)",
        data: [income, expense],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgb(75, 192, 192)", "rgb(255, 99, 132)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount ($)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Income vs Expense",
      },
    },
  };

  console.log("Chart data:", data);

  return (
    <div className="transaction-chart">
      <div className="chart-container">
        {income === 0 && expense === 0 ? (
          <p className="no-data">No transaction data available</p>
        ) : (
          <Bar options={options} data={data} />
        )}
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Total Amount ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Income</td>
              <td className="amount income">{income.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Expense</td>
              <td className="amount expense">{expense.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Net Income</td>
              <td className={`amount net-income ${netIncomeClass}`}>
                {netIncome.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionChart;

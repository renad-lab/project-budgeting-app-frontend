// import React from "react";
// import { Line } from "react-chartjs-2";
// import transactions from "../../data/data.json";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const processData = (data) => {
//   const categories = {};

//   data.forEach((transaction) => {
//     const category = transaction.category;

//     if (!categories[category]) {
//       categories[category] = {
//         totalAmount: 0,
//         count: 0,
//       };
//     }

//     categories[category].totalAmount += transaction.amount;
//     categories[category].count++;
//   });

//   return categories;
// };

// const TransactionChart = () => {
//   const categoriesData = processData(transactions);

//   const data = {
//     labels: Object.keys(categoriesData),
//     datasets: [
//       {
//         label: "Total Amount ($)",
//         data: Object.values(categoriesData).map((category) =>
//           category.totalAmount.toFixed(2)
//         ),
//         borderColor: "rgb(75, 192, 192)",
//         fill: false,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Category",
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Total Amount ($)",
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <div style={{ display: "inline-block" }}>
//         {/* Line Chart */}
//         <div>
//           <Line options={options} data={data} />
//         </div>

//         {/* Table of Data */}
//         <div style={{ marginTop: "20px" }}>
//           <table
//             style={{
//               borderCollapse: "collapse",
//               margin: "0 auto",
//               width: "50%",
//             }}
//           >
//             <thead>
//               <tr>
//                 <th style={tableHeaderStyle}>Category</th>
//                 <th style={tableHeaderStyle}>Total Amount ($)</th>
//                 <th style={tableHeaderStyle}>Transactions Count</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.keys(categoriesData).map((category) => (
//                 <tr key={category} style={tableRowStyle}>
//                   <td style={tableCellStyle}>{category}</td>
//                   <td style={tableCellStyle}>
//                     {categoriesData[category].totalAmount.toFixed(2)}
//                   </td>
//                   <td style={tableCellStyle}>
//                     {categoriesData[category].count}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// const tableHeaderStyle = {
//   background: "#f2f2f2",
//   border: "1px solid #ddd",
//   padding: "8px",
//   textAlign: "center",
// };

// const tableRowStyle = {
//   border: "1px solid #ddd",
// };

// const tableCellStyle = {
//   border: "1px solid #ddd",
//   padding: "8px",
//   textAlign: "center",
// };

// export default TransactionChart;

import React from "react";
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

// Assuming transactions is imported from your data file
import transactions from "../../data/data.json";

const processData = (data) => {
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

const TransactionChart = () => {
  const { income, expense } = processData(transactions);
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
              <td>{income.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Expense</td>
              <td>{expense.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionChart;

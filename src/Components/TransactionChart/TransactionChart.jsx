import React, { useMemo } from "react";
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

const TransactionChart = ({ transactions }) => {
  // Calculate income, expense, and net income from transactions
  const { income, expense, netIncome } = useMemo(() => {
    if (!transactions || transactions.length === 0) {
      return {
        income: 0,
        expense: 0,
        netIncome: 0,
      };
    }

    const result = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.income += Number(transaction.amount);
        } else if (transaction.type === "expense") {
          acc.expense += Math.abs(Number(transaction.amount));
        }
        return acc;
      },
      { income: 0, expense: 0 }
    );

    return {
      income: result.income,
      expense: result.expense,
      netIncome: result.income - result.expense,
    };
  }, [transactions]);

  // Prepare chart data and options
  const data = {
    labels: ["Income", "Expense", "Net Income"],
    datasets: [
      {
        label: "Amount ($)",
        data: [income, expense, netIncome],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          netIncome >= 0
            ? "rgba(75, 192, 192, 0.6)"
            : "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 99, 132)",
          netIncome >= 0 ? "rgb(75, 192, 192)" : "rgb(255, 99, 132)",
        ],
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
        display: true,
      },
      title: {
        display: true,
        text: "Income vs Expense",
      },
    },
  };

  return (
    <div className="transaction-chart">
      <div className="chart-container">
        {transactions && transactions.length > 0 ? (
          <Bar options={options} data={data} />
        ) : (
          <p className="no-data">No transaction data available</p>
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
              <td
                className={`amount net-income ${
                  netIncome >= 0 ? "positive" : "negative"
                }`}
              >
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

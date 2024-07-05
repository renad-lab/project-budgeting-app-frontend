import React, { useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./TransactionChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TransactionChart = ({ transactions }) => {
  const [selectedType, setSelectedType] = useState(null);

  const {
    income,
    expense,
    netIncome,
    incomeTransactions,
    expenseTransactions,
  } = useMemo(() => {
    if (!transactions || transactions.length === 0) {
      return {
        income: 0,
        expense: 0,
        netIncome: 0,
        incomeTransactions: [],
        expenseTransactions: [],
      };
    }

    const result = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.income += Number(transaction.amount);
          acc.incomeTransactions.push(transaction);
        } else if (transaction.type === "expense") {
          acc.expense += Math.abs(Number(transaction.amount));
          acc.expenseTransactions.push(transaction);
        }
        return acc;
      },
      { income: 0, expense: 0, incomeTransactions: [], expenseTransactions: [] }
    );

    return {
      income: result.income,
      expense: result.expense,
      netIncome: result.income - result.expense,
      incomeTransactions: result.incomeTransactions,
      expenseTransactions: result.expenseTransactions,
    };
  }, [transactions]);

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

  const handleRowClick = (type) => {
    setSelectedType(selectedType === type ? null : type);
  };

  const renderTransactionRows = (transactions) =>
    transactions.map((transaction) => (
      <TableRow key={transaction.id}>
        <TableCell colSpan={3}>
          <Collapse in={selectedType !== null} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body2">
                <strong>{transaction.date}</strong>: {transaction.description} -
                ${transaction.amount.toLocaleString()}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    ));

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
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Type</TableCell>
                <TableCell align="right">Total Amount ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow onClick={() => handleRowClick("income")}>
                <TableCell>
                  <IconButton size="small">
                    {selectedType === "income" ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell>Income</TableCell>
                <TableCell
                  align="right"
                  className="amount income"
                  style={{ color: "green" }}
                >
                  {income.toLocaleString()}
                </TableCell>
              </TableRow>
              {selectedType === "income" &&
                renderTransactionRows(incomeTransactions)}
              <TableRow onClick={() => handleRowClick("expense")}>
                <TableCell>
                  <IconButton size="small">
                    {selectedType === "expense" ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell>Expense</TableCell>
                <TableCell
                  align="right"
                  className="amount expense"
                  style={{ color: "red" }}
                >
                  {expense.toLocaleString()}
                </TableCell>
              </TableRow>
              {selectedType === "expense" &&
                renderTransactionRows(expenseTransactions)}
              <TableRow>
                <TableCell />
                <TableCell>Net Income</TableCell>
                <TableCell
                  align="right"
                  className={`amount net-income ${
                    netIncome >= 0 ? "positive" : "negative"
                  }`}
                  style={{ color: netIncome >= 0 ? "green" : "red" }}
                >
                  {netIncome.toLocaleString()}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default TransactionChart;

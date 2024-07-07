import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
  TablePagination,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./TransactionsTable.css";

const TransactionsTable = ({ transactions }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [openRow, setOpenRow] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when changing rows per page
  };

  const handleRowClick = (rowId) => {
    setOpenRow(openRow === rowId ? null : rowId);
  };

  const netIncome = React.useMemo(() => {
    const totalAmount = transactions.reduce((total, transaction) => {
      const amount = transaction.quantity
        ? transaction.amount * transaction.quantity
        : transaction.amount;
      return total + amount;
    }, 0);
    return isNaN(totalAmount) ? 0 : Number(totalAmount);
  }, [transactions]);

  const netIncomeColor = netIncome >= 0 ? "green" : "red";

  const sortedTransactions = transactions.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const rows = sortedTransactions.map((transaction) => (
    <React.Fragment key={transaction.id}>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => handleRowClick(transaction.id)}
          >
            {openRow === transaction.id ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell
          style={{
            maxWidth: 100,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {transaction.date}
        </TableCell>
        <TableCell>
          <Link to={`/transactions/${transaction.id}`}>
            {transaction.description}
          </Link>
        </TableCell>
        <TableCell align="right">
          <span
            className={`${
              transaction.amount < 0 ? "negative" : "positive"
            } amount`}
          >
            $
            {transaction.quantity
              ? (transaction.amount * transaction.quantity).toLocaleString(
                  "en-US",
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )
              : transaction.amount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
          </span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse
            in={openRow === transaction.id}
            timeout="auto"
            unmountOnExit
          >
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="details">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Category</TableCell>
                    <TableCell align="center">Entity</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Unit</TableCell>
                    <TableCell align="center">Best By</TableCell>
                    <TableCell align="center">Origin</TableCell>
                    <TableCell align="center">Roast Level</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">{transaction.category}</TableCell>
                    <TableCell align="center">{transaction.entity}</TableCell>
                    <TableCell align="center">{transaction.quantity}</TableCell>
                    <TableCell align="center">{transaction.unit}</TableCell>
                    <TableCell align="center">{transaction.best_by}</TableCell>
                    <TableCell align="center">{transaction.origin}</TableCell>
                    <TableCell align="center">
                      {transaction.roast_level}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  ));

  rows.push(
    <TableRow key="netIncome">
      <TableCell />
      <TableCell colSpan={2} style={{ textAlign: "right" }}>
        <strong>Net Income:</strong>
      </TableCell>
      <TableCell
        align="right"
        style={{
          fontWeight: "bold",
          color: netIncomeColor,
        }}
      >
        $
        {netIncome.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </TableCell>
    </TableRow>
  );

  // Calculate the range of transactions being displayed
  const firstTransactionIndex = page * rowsPerPage + 1;
  const lastTransactionIndex = page * rowsPerPage + sortedTransactions.length;

  return (
    <Paper className="transactions-table-container">
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Total ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={transactions.length}
        rowsPerPageOptions={[8, 16, 24, 100]}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelDisplayedRows={({ from, to, count }) =>
          `Transactions ${from} - ${to} out of ${count}`
        }
      />
    </Paper>
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string,
      entity: PropTypes.string,
      quantity: PropTypes.number,
      unit: PropTypes.string,
      best_by: PropTypes.string,
      origin: PropTypes.string,
      roast_level: PropTypes.string,
    })
  ).isRequired,
};

export default TransactionsTable;

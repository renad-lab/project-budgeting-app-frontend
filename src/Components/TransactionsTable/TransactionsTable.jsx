// import React from "react";
// import { useTable } from "react-table";
// import { Link } from "react-router-dom";
// import "./TransactionsTable.css";

// const TransactionsTable = ({ transactions }) => {
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Date",
//         accessor: "date",
//         width: 80,
//         textAlign: "center",
//         className: "date-column",
//       },
//       {
//         Header: "Description",
//         accessor: "description",
//         width: 350,
//         className: "description-column",
//         Cell: ({ row }) => (
//           <Link to={`/transactions/${row.original.id}`}>
//             {row.original.description}
//           </Link>
//         ),
//       },
//       {
//         Header: "Amount ($)",
//         accessor: "amount",
//         width: 80,
//         className: "amount-column",
//         Cell: ({ value }) => (
//           <span
//             className={`${value < 0 ? "negative" : "positive"} amount`}
//             style={{ textAlign: "right" }}
//           >
//             {value < 0
//               ? `- $${Math.abs(value)
//                   .toFixed(2)
//                   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
//               : `$${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
//           </span>
//         ),
//       },
//     ],
//     []
//   );

//   const netIncome = React.useMemo(
//     () =>
//       transactions.reduce(
//         (total, transaction) => total + transaction.amount,
//         0
//       ),
//     [transactions]
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data: transactions });

//   return (
//     <div className="transactions-table">
//       <h2>Transactions</h2>
//       <table {...getTableProps()} className="table">
//         <thead>
//           {headerGroups.map((headerGroup, index) => (
//             <tr {...headerGroup.getHeaderGroupProps()} key={`header-${index}`}>
//               {headerGroup.headers.map((column, idx) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   key={`header-${index}-${idx}`}
//                   style={{ width: column.width, textAlign: "center" }}
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()} key={`row-${row.id}`}>
//                 {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     key={`cell-${cell.column.id}`}
//                     className={`${cell.column.className} cell-text`}
//                     style={{
//                       textAlign: cell.column.id === "amount" ? "right" : "left",
//                     }}
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//           {/* Net Income Row */}
//           <tr key="net-income">
//             <td colSpan={2} style={{ textAlign: "right" }}>
//               <strong>Net Income:</strong>
//             </td>
//             <td className="amount" style={{ textAlign: "right" }}>
//               <strong>
//                 ${netIncome.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
//               </strong>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TransactionsTable;

import React from "react";
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
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./TransactionsTable.css";

const TransactionsTable = ({ transactions }) => {
  const [openRow, setOpenRow] = React.useState(null);

  const handleRowClick = (rowId) => {
    setOpenRow(openRow === rowId ? null : rowId);
  };

  const netIncome = React.useMemo(
    () =>
      transactions.reduce(
        (total, transaction) => total + transaction.amount,
        0
      ),
    [transactions]
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Amount ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
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
                <TableCell>{transaction.date}</TableCell>
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
                    {transaction.amount < 0
                      ? `- $${Math.abs(transaction.amount)
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                      : `$${transaction.amount
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={4}
                >
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
                            <TableCell>Category</TableCell>
                            <TableCell>Entity</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Unit</TableCell>
                            <TableCell>Best By</TableCell>
                            <TableCell>Origin</TableCell>
                            <TableCell>Roast Level</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>{transaction.category}</TableCell>
                            <TableCell>{transaction.entity}</TableCell>
                            <TableCell>{transaction.quantity}</TableCell>
                            <TableCell>{transaction.unit}</TableCell>
                            <TableCell>{transaction.best_by}</TableCell>
                            <TableCell>{transaction.origin}</TableCell>
                            <TableCell>{transaction.roast_level}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
          <TableRow>
            <TableCell colSpan={2} style={{ textAlign: "right" }}>
              <strong>Net Income:</strong>
            </TableCell>
            <TableCell align="right">
              <strong>
                ${netIncome.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
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

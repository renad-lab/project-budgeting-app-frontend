// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import {
//   Box,
//   Collapse,
//   IconButton,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
//   Paper,
// } from "@mui/material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import "./TransactionsTable.css";

// const TransactionsTable = ({ transactions }) => {
//   const [openRow, setOpenRow] = React.useState(null);

//   const handleRowClick = (rowId) => {
//     setOpenRow(openRow === rowId ? null : rowId);
//   };

//   const netIncome = React.useMemo(
//     () =>
//       transactions.reduce(
//         (total, transaction) => total + transaction.amount,
//         0
//       ),
//     [transactions]
//   );

//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Date</TableCell>
//             <TableCell>Description</TableCell>
//             <TableCell align="right">Amount ($)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {transactions.map((transaction) => (
//             <React.Fragment key={transaction.id}>
//               <TableRow>
//                 <TableCell>
//                   <IconButton
//                     aria-label="expand row"
//                     size="small"
//                     onClick={() => handleRowClick(transaction.id)}
//                   >
//                     {openRow === transaction.id ? (
//                       <KeyboardArrowUpIcon />
//                     ) : (
//                       <KeyboardArrowDownIcon />
//                     )}
//                   </IconButton>
//                 </TableCell>
//                 <TableCell>{transaction.date}</TableCell>
//                 <TableCell>
//                   <Link to={`/transactions/${transaction.id}`}>
//                     {transaction.description}
//                   </Link>
//                 </TableCell>
//                 <TableCell align="right">
//                   <span
//                     className={`${
//                       transaction.amount < 0 ? "negative" : "positive"
//                     } amount`}
//                   >
//                     {transaction.amount < 0
//                       ? `- $${Math.abs(transaction.amount)
//                           .toFixed(2)
//                           .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
//                       : `$${transaction.amount
//                           .toFixed(2)
//                           .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
//                   </span>
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell
//                   style={{ paddingBottom: 0, paddingTop: 0 }}
//                   colSpan={4}
//                 >
//                   <Collapse
//                     in={openRow === transaction.id}
//                     timeout="auto"
//                     unmountOnExit
//                   >
//                     <Box margin={1}>
//                       <Typography variant="h6" gutterBottom component="div">
//                         Details
//                       </Typography>
//                       <Table size="small" aria-label="details">
//                         <TableHead>
//                           <TableRow>
//                             <TableCell>Category</TableCell>
//                             <TableCell>Entity</TableCell>
//                             <TableCell>Quantity</TableCell>
//                             <TableCell>Unit</TableCell>
//                             <TableCell>Best By</TableCell>
//                             <TableCell>Origin</TableCell>
//                             <TableCell>Roast Level</TableCell>
//                           </TableRow>
//                         </TableHead>
//                         <TableBody>
//                           <TableRow>
//                             <TableCell>{transaction.category}</TableCell>
//                             <TableCell>{transaction.entity}</TableCell>
//                             <TableCell>{transaction.quantity}</TableCell>
//                             <TableCell>{transaction.unit}</TableCell>
//                             <TableCell>{transaction.best_by}</TableCell>
//                             <TableCell>{transaction.origin}</TableCell>
//                             <TableCell>{transaction.roast_level}</TableCell>
//                           </TableRow>
//                         </TableBody>
//                       </Table>
//                     </Box>
//                   </Collapse>
//                 </TableCell>
//               </TableRow>
//             </React.Fragment>
//           ))}
//           <TableRow>
//             <TableCell colSpan={2} style={{ textAlign: "right" }}>
//               <strong>Net Income:</strong>
//             </TableCell>
//             <TableCell align="right">
//               <strong>
//                 ${netIncome.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
//               </strong>
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// TransactionsTable.propTypes = {
//   transactions: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       date: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       amount: PropTypes.number.isRequired,
//       category: PropTypes.string,
//       entity: PropTypes.string,
//       quantity: PropTypes.number,
//       unit: PropTypes.string,
//       best_by: PropTypes.string,
//       origin: PropTypes.string,
//       roast_level: PropTypes.string,
//     })
//   ).isRequired,
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

  const netIncome = React.useMemo(() => {
    const totalAmount = transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
    return isNaN(totalAmount) ? 0 : Number(totalAmount);
  }, [transactions]);
  // console.log(netIncome, Number(netIncome));

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
                      : `$${transaction.amount}`}
                    {/* // .toFixed(2) */}
                    {/* // .replace(/\B(?=(\d{3})+(?!\d))/g, ",") */}
                    {/* // }`} */}
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

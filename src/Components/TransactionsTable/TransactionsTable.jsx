import React from "react";
import { useTable } from "react-table";
import { Link } from "react-router-dom";
import "./TransactionsTable.css";

const TransactionsTable = ({ transactions }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Date", accessor: "date" },
      {
        Header: "Description",
        accessor: "description",
        Cell: ({ row }) => (
          <Link to={`/transactions/${row.original.id}`}>
            {row.original.description}
          </Link>
        ),
      },
      {
        Header: "Amount ($)",
        accessor: "amount",
        Cell: ({ value }) => (
          <span className={value < 0 ? "negative" : "positive"}>
            ${Math.abs(value).toFixed(2)}
          </span>
        ),
        className: "amount",
      },
    ],
    []
  );

  // Calculate net income
  const netIncome = transactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: transactions });

  return (
    <div className="transactions-table">
      <h2>Transactions</h2>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
          {/* Net Income Row */}
          <tr>
            <td colSpan={2} style={{ textAlign: "right" }}>
              <strong>Net Income:</strong>
            </td>
            <td>
              <strong>${netIncome.toFixed(2)}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;

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
  const netIncome = React.useMemo(
    () =>
      transactions.reduce(
        (total, transaction) => total + transaction.amount,
        0
      ),
    [transactions]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: transactions });

  return (
    <div className="transactions-table">
      <h2>Transactions</h2>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={`header-${index}`}>
              {headerGroup.headers.map((column, idx) => (
                <th {...column.getHeaderProps()} key={`header-${index}-${idx}`}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={`row-${row.id}`}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={`cell-${cell.column.id}`}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
          {/* Net Income Row */}
          <tr key="net-income">
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

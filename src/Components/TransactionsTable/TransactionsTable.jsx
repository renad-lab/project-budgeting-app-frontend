import React from "react";
import { useTable } from "react-table";
import { Link } from "react-router-dom";
import "./TransactionsTable.css";

const TransactionsTable = ({ transactions }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
        width: 80,
        textAlign: "center",
        className: "date-column",
      }, // Updated Date column definition
      {
        Header: "Description",
        accessor: "description",
        width: 350,
        className: "description-column", // Added class for Description column
        Cell: ({ row }) => (
          <Link to={`/transactions/${row.original.id}`}>
            {row.original.description}
          </Link>
        ),
      },
      {
        Header: "Amount ($)",
        accessor: "amount",
        width: 80,
        className: "amount-column", // Added class for Amount column
        Cell: ({ value }) => (
          <span className={value < 0 ? "negative" : "positive"}>
            {value < 0
              ? `- $${Math.abs(value)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
              : `$${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
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
                <th
                  {...column.getHeaderProps()}
                  key={`header-${index}-${idx}`}
                  style={{ width: column.width, textAlign: "center" }} // Center align headers
                >
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
                  <td
                    {...cell.getCellProps()}
                    key={`cell-${cell.column.id}`}
                    className={`${cell.column.className} cell-text`}
                  >
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
            <td className="amount">
              <strong>
                ${netIncome.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;

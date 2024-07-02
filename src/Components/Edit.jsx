import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const API = import.meta.env.VITE_BASE_URL;
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: new Date().toISOString().slice(0, 10),
    from: "",
    category: "",
    recurring: false,
  });
  const navigate = useNavigate();
  const { index } = useParams();

  useEffect(() => {
    fetch(`${API}/${index}`)
      .then((res) => res.json())
      .then((res) => {
        setTransaction((prevState) => res);
      })
      .catch((err) => console.log(err));
  }, [index]);

  const handleChange = (e) => {
    // console.log(e)
    setTransaction((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Edit transaction:", res);
        navigate(`/transactions/${index}`);
      })
      .catch((err) => console.error(err));
  };

  if (!transaction) return <div>Loading...</div>;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Edit Transaction</legend>
          <input
            type="text"
            placeholder="Item Name"
            name="item_name"
            value={transaction.item_name}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Amount"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
          />
          <br />
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="From"
            name="from"
            value={transaction.from}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={transaction.category}
            onChange={handleChange}
          />
          <br />
          <input
            type="checkbox"
            id="recurring"
            name="recurring"
            checked={transaction.recurring}
            onChange={handleChange}
          />
          <label htmlFor="recurring">Recurring</label>
          <br />
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Edit;

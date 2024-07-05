// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// // import "./Edit.css";

// const Edit = () => {
//   const API = import.meta.env.VITE_BASE_URL;
//   const [transaction, setTransaction] = useState({
//     item_name: "",
//     amount: 0,
//     date: new Date().toISOString().slice(0, 10),
//     from: "",
//     category: "",
//     recurring: false,
//   });
//   const navigate = useNavigate();
//   const { index } = useParams();

//   useEffect(() => {
//     fetch(`${API}/${index}`)
//       .then((res) => res.json())
//       .then((res) => {
//         // Update transaction state with fetched data
//         setTransaction(res); // Assuming res is the fetched transaction object
//       })
//       .catch((err) => console.log(err));
//   }, [API, index]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     // Use value based on input type
//     const updatedValue = type === "checkbox" ? checked : value;

//     setTransaction((prevState) => ({
//       ...prevState,
//       [name]: updatedValue,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(`${API}/${index}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(transaction),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log("Edit transaction:", res);
//         navigate(`/transactions/${index}`);
//       })
//       .catch((err) => console.error(err));
//   };

//   if (!transaction) return <div>Loading...</div>;
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <legend>Edit Transaction</legend>
//           <input
//             type="text"
//             placeholder="Item Name"
//             name="item_name"
//             value={transaction.item_name}
//             onChange={handleChange}
//           />
//           <br />
//           <input
//             type="number"
//             placeholder="Amount"
//             name="amount"
//             value={transaction.amount}
//             onChange={handleChange}
//           />
//           <br />
//           <input
//             type="date"
//             placeholder="Date"
//             name="date"
//             value={transaction.date}
//             onChange={handleChange}
//           />
//           <br />
//           <input
//             type="text"
//             placeholder="From"
//             name="from"
//             value={transaction.from}
//             onChange={handleChange}
//           />
//           <br />
//           <input
//             type="text"
//             placeholder="Category"
//             name="category"
//             value={transaction.category}
//             onChange={handleChange}
//           />
//           <br />
//           <input
//             type="checkbox"
//             id="recurring"
//             name="recurring"
//             checked={transaction.recurring}
//             onChange={handleChange}
//           />
//           <label htmlFor="recurring">Recurring</label>
//           <br />
//           <input type="submit" value="Submit" />
//         </fieldset>
//       </form>
//       <Link to={`/transactions/${index}`}>
//         <button>Back</button>
//       </Link>
//     </div>
//   );
// };

// export default Edit;

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Edit.css";

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
        // Update transaction state with fetched data
        setTransaction(res); // Assuming res is the fetched transaction object
      })
      .catch((err) => console.log(err));
  }, [API, index]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Use value based on input type
    const updatedValue = type === "checkbox" ? checked : value;

    setTransaction((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
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
    <div className="edit-container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Edit Transaction</legend>
          <label htmlFor="item_name">Item Name</label>
          <input
            type="text"
            id="item_name"
            name="item_name"
            value={transaction.item_name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            name="from"
            value={transaction.from}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
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
      <Link to={`/transactions/${index}`} className="link-back">
        Back
      </Link>
    </div>
  );
};

export default Edit;

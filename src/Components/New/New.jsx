// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./New.css";

// const New = () => {
//   const navigate = useNavigate();

//   const getTodayDate = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     let month = today.getMonth() + 1;
//     let day = today.getDate();

//     month = month < 10 ? `0${month}` : month;
//     day = day < 10 ? `0${day}` : day;

//     return `${year}-${month}-${day}`;
//   };

//   const [transactions, setTransactions] = useState([]);

//   const [newTransaction, setNewTransaction] = useState({
//     date: getTodayDate(),
//     type: "",
//     category: "",
//     description: "",
//     amount: 0.0,
//     quantity: 0,
//     unit: "",
//     entity: "",
//     best_by: "",
//     recurring: false,
//     origin: "",
//     roast_level: "",
//     id: transactions[transactions.length - 1]?.id + 1,
//   });

//   // const [newTransaction, setNewTransaction] = useState({
//   //   date: getTodayDate(),
//   //   type: "",
//   //   category: "",
//   //   description: "",
//   //   amount: 0.0,
//   //   quantity: 0,
//   //   unit: "",
//   //   entity: "",
//   //   best_by: "",
//   //   recurring: false,
//   //   origin: "",
//   //   roast_level: "",
//   //   id:
//   //     transactions.length > 0
//   //       ? transactions[transactions.length - 1].id + 1
//   //       : 1,
//   // });

//   const API = import.meta.env.VITE_BASE_URL;

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setNewTransaction((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(API, {
//       method: "POST",
//       body: JSON.stringify(newTransaction),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         navigate("/transactions");
//       })
//       .catch((err) => console.error(err));
//   };

//   useEffect(() => {
//     fetch(API)
//       .then((res) => res.json())
//       .then((res) => {
//         setNewTransaction({
//           ...newTransaction,
//           id: res[res.length - 1]?.id + 1,
//         });
//         setTransactions(res);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <form onSubmit={handleSubmit} className="form-container">
//       <fieldset className="fieldset">
//         <legend className="legend">New Transaction</legend>
//         <input
//           type="date"
//           placeholder="Date"
//           name="date"
//           value={newTransaction.date}
//           onChange={handleChange}
//           className="input-field"
//           required
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Type"
//           name="type"
//           value={newTransaction.type}
//           onChange={handleChange}
//           className="input-field"
//           required
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Category"
//           name="category"
//           value={newTransaction.category}
//           onChange={handleChange}
//           className="input-field"
//           required
//         />
//         <br />
//         <textarea
//           placeholder="Description"
//           name="description"
//           value={newTransaction.description}
//           onChange={handleChange}
//           className="input-field"
//           rows="3"
//           required
//         ></textarea>
//         <br />
//         <input
//           type="number"
//           placeholder="Amount"
//           name="amount"
//           value={newTransaction.amount}
//           onChange={handleChange}
//           step="0.01"
//           className="input-field"
//           required
//         />
//         <br />
//         <input
//           type="number"
//           placeholder="Quantity"
//           name="quantity"
//           value={newTransaction.quantity}
//           onChange={handleChange}
//           className="input-field"
//           required
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Unit"
//           name="unit"
//           value={newTransaction.unit}
//           onChange={handleChange}
//           className="input-field"
//           required
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Entity"
//           name="entity"
//           value={newTransaction.entity}
//           onChange={handleChange}
//           className="input-field"
//           required
//         />
//         <br />
//         <input
//           type="date"
//           placeholder="Best By"
//           name="best_by"
//           value={newTransaction.best_by}
//           onChange={handleChange}
//           className="input-field"
//         />
//         <br />
//         <select
//           name="recurring"
//           value={newTransaction.recurring}
//           onChange={handleChange}
//           className="input-field"
//         >
//           <option value={false}>One-time</option>
//           <option value={true}>Recurring</option>
//         </select>
//         <br />
//         <input
//           type="text"
//           placeholder="Origin"
//           name="origin"
//           value={newTransaction.origin}
//           onChange={handleChange}
//           className="input-field"
//         />
//         <br />
//         <select
//           name="roast_level"
//           value={newTransaction.roast_level}
//           onChange={handleChange}
//           className="input-field"
//         >
//           <option value="">Select Roast Level</option>
//           <option value="light">Light</option>
//           <option value="medium">Medium</option>
//           <option value="dark">Dark</option>
//           <option value="green">Green</option>
//         </select>
//         <br />
//         <input type="submit" value="Submit" className="submit-button" />
//       </fieldset>
//     </form>
//   );
// };

// export default New;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
} from "@mui/material";

const New = () => {
  const navigate = useNavigate();

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  const [transactions, setTransactions] = useState([]);

  const [newTransaction, setNewTransaction] = useState({
    date: getTodayDate(),
    type: "",
    category: "",
    description: "",
    amount: 0.0,
    quantity: 0,
    unit: "",
    entity: "",
    best_by: "",
    recurring: false,
    origin: "",
    roast_level: "",
    id: transactions[transactions.length - 1]?.id + 1,
  });

  const API = import.meta.env.VITE_BASE_URL;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTransaction((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(API, {
      method: "POST",
      body: JSON.stringify(newTransaction),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/transactions");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        setNewTransaction({
          ...newTransaction,
          id: res[res.length - 1]?.id + 1,
        });
        setTransactions(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "80%",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FormControl fullWidth margin="normal">
        <TextField
          label="Date"
          type="date"
          name="date"
          value={newTransaction.date}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Type</InputLabel>
        <Select
          name="type"
          value={newTransaction.type}
          onChange={handleChange}
          size="small"
          required
        >
          <MenuItem value="income">Income</MenuItem>
          <MenuItem value="expense">Expense</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Category"
          name="category"
          value={newTransaction.category}
          onChange={handleChange}
          size="small"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Description"
          name="description"
          value={newTransaction.description}
          onChange={handleChange}
          multiline
          rows={3}
          size="small"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Amount"
          type="number"
          name="amount"
          value={newTransaction.amount}
          onChange={handleChange}
          step="0.01"
          size="small"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Quantity"
          type="number"
          name="quantity"
          value={newTransaction.quantity}
          onChange={handleChange}
          size="small"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Unit"
          name="unit"
          value={newTransaction.unit}
          onChange={handleChange}
          size="small"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Entity"
          name="entity"
          value={newTransaction.entity}
          onChange={handleChange}
          size="small"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Best By"
          type="date"
          name="best_by"
          value={newTransaction.best_by}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Recurring</InputLabel>
        <Select
          name="recurring"
          value={newTransaction.recurring}
          onChange={handleChange}
          size="small"
        >
          <MenuItem value={false}>One-time</MenuItem>
          <MenuItem value={true}>Recurring</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Origin"
          name="origin"
          value={newTransaction.origin}
          onChange={handleChange}
          size="small"
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Roast Level</InputLabel>
        <Select
          name="roast_level"
          value={newTransaction.roast_level}
          onChange={handleChange}
          size="small"
        >
          <MenuItem value="">Select Roast Level</MenuItem>
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
          <MenuItem value="green">Green</MenuItem>
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#6F4E37", // Coffee color
          color: "#fff",
          "&:hover": {
            backgroundColor: "#5C4033", // Darker coffee color on hover
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default New;

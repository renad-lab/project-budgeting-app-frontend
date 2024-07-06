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
          sx={{ "& input": { color: "#6F4E37" } }}
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
          sx={{ color: "#6F4E37" }}
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
          sx={{ "& input": { color: "#6F4E37" } }}
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
          sx={{ "& textarea": { color: "#6F4E37" } }}
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
          sx={{ "& input": { color: "#6F4E37" } }}
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
          sx={{ "& input": { color: "#6F4E37" } }}
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
          sx={{ "& input": { color: "#6F4E37" } }}
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
          sx={{ "& input": { color: "#6F4E37" } }}
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
          sx={{ "& input": { color: "#6F4E37" } }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Recurring</InputLabel>
        <Select
          name="recurring"
          value={newTransaction.recurring}
          onChange={handleChange}
          size="small"
          sx={{ color: "#6F4E37" }}
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
          sx={{ "& input": { color: "#6F4E37" } }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Roast Level</InputLabel>
        <Select
          name="roast_level"
          value={newTransaction.roast_level}
          onChange={handleChange}
          size="small"
          sx={{ color: "#6F4E37" }}
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
          backgroundColor: "#6F4E37",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#5C4033",
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default New;

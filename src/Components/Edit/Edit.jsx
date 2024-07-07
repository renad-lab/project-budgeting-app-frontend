import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  Grid,
  Typography,
} from "@mui/material";

const Edit = () => {
  const API = import.meta.env.VITE_BASE_URL;
  const [transaction, setTransaction] = useState({
    id: 0,
    date: new Date().toISOString().slice(0, 10),
    type: "",
    category: "",
    description: "",
    amount: 0,
    quantity: 0,
    unit: "",
    entity: "",
    best_by: "",
    recurring: false,
    origin: "",
    roast_level: "",
  });
  const navigate = useNavigate();
  const { index } = useParams();

  useEffect(() => {
    fetch(`${API}/${index}`)
      .then((res) => res.json())
      .then((res) => {
        setTransaction(res);
      })
      .catch((err) => console.log(err));
  }, [API, index]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "80%",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "2rem",
          color: "#603c1c",
          marginBottom: "20px",
          textAlign: "left",
        }}
      >
        Edit Transaction
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Date"
          type="date"
          name="date"
          value={transaction.date}
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
          value={transaction.type}
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
          value={transaction.category}
          onChange={handleChange}
          size="small"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Description"
          name="description"
          value={transaction.description}
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
          value={transaction.amount}
          onChange={handleChange}
          size="small"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Quantity"
          type="number"
          name="quantity"
          value={transaction.quantity}
          onChange={handleChange}
          size="small"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Unit"
          name="unit"
          value={transaction.unit}
          onChange={handleChange}
          size="small"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Entity"
          name="entity"
          value={transaction.entity}
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
          value={transaction.best_by}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <FormControlLabel
          control={
            <Checkbox
              name="recurring"
              checked={transaction.recurring}
              onChange={handleChange}
            />
          }
          label="Recurring"
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Origin"
          name="origin"
          value={transaction.origin}
          onChange={handleChange}
          size="small"
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Roast Level</InputLabel>
        <Select
          name="roast_level"
          value={transaction.roast_level}
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
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "20px" }}
      >
        <Grid item>
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
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to={`/transactions/${index}`}
            variant="contained"
            sx={{
              backgroundColor: "#6F4E37",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#5C4033",
              },
            }}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Edit;

// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import "./Show.css";

// const Show = () => {
//   const [transaction, setTransaction] = useState({});
//   const { index } = useParams();
//   const navigate = useNavigate();
//   const API = import.meta.env.VITE_BASE_URL;

//   // Function to handle deletion of a transaction
//   const handleDelete = () => {
//     fetch(`${API}/${index}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then(() => {
//         navigate("/transactions");
//       })
//       .catch((err) => console.error(err));
//   };

//   // Effect to fetch transaction details on component mount
//   useEffect(() => {
//     fetch(`${API}/${index}`)
//       .then((res) => res.json())
//       .then((data) => setTransaction(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="show-container">
//       <h1 className="show-title">Transaction Details</h1>

//       {transaction && (
//         <div className="show-details">
//           <p className="show-label">
//             ID: <span className="show-value">{transaction.id}</span>
//           </p>
//           <p className="show-label">
//             Date: <span className="show-value">{transaction.date}</span>
//           </p>
//           <p className="show-label">
//             Description:{" "}
//             <span className="show-value">{transaction.description}</span>
//           </p>
//           <p className="show-label">
//             Amount: <span className="show-value">${transaction.amount}</span>
//           </p>
//           <p className="show-label">
//             Quantity: <span className="show-value">{transaction.quantity}</span>
//           </p>
//           <p className="show-label">
//             Unit: <span className="show-value">{transaction.unit}</span>
//           </p>
//           <p className="show-label">
//             Entity: <span className="show-value">{transaction.entity}</span>
//           </p>
//           <p className="show-label">
//             Best By: <span className="show-value">{transaction.best_by}</span>
//           </p>
//           <p className="show-label">
//             Recurring:{" "}
//             <span className="show-value">
//               {transaction.recurring ? "Yes" : "No"}
//             </span>
//           </p>
//           <p className="show-label">
//             Origin: <span className="show-value">{transaction.origin}</span>
//           </p>
//           <p className="show-label">
//             Roast Level:{" "}
//             <span className="show-value">{transaction.roast_level}</span>
//           </p>
//         </div>
//       )}

//       <div className="show-actions">
//         <Link to={`/transactions/${index}/edit`}>
//           <button>Edit</button>
//         </Link>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default Show;

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Show = () => {
  const [transaction, setTransaction] = useState({});
  const { index } = useParams();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_BASE_URL;

  // Function to handle deletion of a transaction
  const handleDelete = () => {
    fetch(`${API}/${index}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/transactions");
      })
      .catch((err) => console.error(err));
  };

  // Effect to fetch transaction details on component mount
  useEffect(() => {
    fetch(`${API}/${index}`)
      .then((res) => res.json())
      .then((data) => setTransaction(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box
      sx={{
        width: "80%",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Transaction Details
      </Typography>

      {transaction && (
        <Paper
          sx={{
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <Box sx={{ marginBottom: "10px" }}>
            <Typography variant="subtitle1" gutterBottom>
              ID: <span>{transaction.id}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Date: <span>{transaction.date}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Description: <span>{transaction.description}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Amount: <span>${transaction.amount}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Quantity: <span>{transaction.quantity}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Unit: <span>{transaction.unit}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Entity: <span>{transaction.entity}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Best By: <span>{transaction.best_by}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Recurring: <span>{transaction.recurring ? "Yes" : "No"}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Origin: <span>{transaction.origin}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Roast Level: <span>{transaction.roast_level}</span>
            </Typography>
          </Box>
        </Paper>
      )}

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            component={Link}
            to={`/transactions/${index}/edit`}
            sx={{
              backgroundColor: "#6F4E37",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#5C4033",
              },
            }}
          >
            Edit
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
            sx={{
              backgroundColor: "#6F4E37",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#5C4033",
              },
            }}
          >
            Delete
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            component={Link}
            to="/transactions"
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

export default Show;

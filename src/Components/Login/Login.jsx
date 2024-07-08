// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Box,
//   Paper,
//   Grid,
// } from "@mui/material";
// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.username === "demo" && formData.password === "password") {
//       // For demo purposes, assume login is successful
//       navigate("/");
//     } else {
//       alert("Invalid username or password");
//     }
//   };

//   return (
//     <div className="login-container">
//       <Container maxWidth="xs">
//         <Paper elevation={3} className="login-paper">
//           <Typography variant="h5" component="h2" align="center" gutterBottom>
//             Login
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   type="text"
//                   label="Username"
//                   name="username"
//                   fullWidth
//                   variant="outlined"
//                   value={formData.username}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   type="password"
//                   label="Password"
//                   name="password"
//                   fullWidth
//                   variant="outlined"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{ mt: 2 }}
//             >
//               Login
//             </Button>
//           </Box>
//           <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//             Don't have a{" "}
//             <strong className="coffeebeanies-text">coffeebeanies</strong>{" "}
//             account?{" "}
//             <Link to="/signup" style={{ textDecoration: "none" }}>
//               Sign Up
//             </Link>
//           </Typography>
//         </Paper>
//       </Container>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Paper,
  Grid,
} from "@mui/material";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username === "demo" && formData.password === "password") {
      // For demo purposes, assume login is successful
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <Container maxWidth="xs">
        <Paper elevation={3} className="login-paper">
          <Typography variant="h5" component="h2" align="center" gutterBottom>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Username"
                  name="username"
                  fullWidth
                  variant="outlined"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Password"
                  name="password"
                  fullWidth
                  variant="outlined"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </Box>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have a{" "}
            <strong className="coffeebeanies-text">coffeebeanies</strong>{" "}
            account?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.css";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import backgroundImage from "./navid-sohrabi-zIAuzjIcCvk-unsplash.jpg";

// const NavBar = () => {
//   const handleLogin = () => {
//     alert("Login button clicked!");
//   };

//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         top: 0,
//         zIndex: 1000,
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         marginBottom: 0,
//       }}
//     >
//       <Toolbar>
//         <IconButton
//           size="large"
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ mr: 2 }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           <Link to="/transactions" className="logo">
//             <strong>coffeebeanies</strong>
//           </Link>
//           <br />
//           <span className="budget-tracker">
//             business tracker for a tiny coffee bean shop on Etsy
//           </span>
//         </Typography>
//         <Button
//           color="inherit"
//           component={Link}
//           to="/transactions/new"
//           className="nav-link"
//           sx={{ textTransform: "none", color: "whitesmoke" }}
//         >
//           Add Transaction
//         </Button>
//         <Button
//           color="inherit"
//           onClick={handleLogin}
//           sx={{
//             textTransform: "none",
//             color: "whitesmoke",
//             marginLeft: "20px",
//             fontSize: "16px",
//             fontWeight: "bold",
//           }}
//         >
//           Login
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import backgroundImage from "./navid-sohrabi-zIAuzjIcCvk-unsplash.jpg";

const NavBar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        zIndex: 1000,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginBottom: 0,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/transactions" className="logo">
            <strong>coffeebeanies</strong>
          </Link>
          <br />
          <span className="budget-tracker">
            business tracker for a tiny coffee bean shop on Etsy
          </span>
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/transactions/new"
          className="nav-link"
          sx={{ textTransform: "none", color: "whitesmoke" }}
        >
          Add Transaction
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/login"
          sx={{
            textTransform: "none",
            color: "whitesmoke",
            marginLeft: "20px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

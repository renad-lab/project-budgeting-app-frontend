// import React from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.css";
// const NavBar = () => {
//   return (
//     <div>
//       <nav className="navbar">
//         <h1 className="logo">
//           <Link to="/transactions">
//             <i>Coffeebeanies</i>
//           </Link>
//           <br />
//           <span className="budget-tracker">
//             business tracker for a tiny coffee bean shop on etsy
//           </span>
//         </h1>
//         <ul className="nav-links">
//           {/* <li>
//             <Link to="/transactions" className="nav-link">
//               Transactions
//             </Link>
//           </li> */}
//           <li>
//             <Link to="/transactions/new" className="nav-link">
//               Add Transaction
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import backgroundImage from "./navid-sohrabi-zIAuzjIcCvk-unsplash.jpg";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
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
              <i>coffeebeanies</i>
            </Link>
            <br />
            <span className="budget-tracker">
              business tracker for a tiny coffee bean shop on etsy
            </span>
          </Typography>
          <Button color="inherit">
            <Link to="/transactions/new" className="nav-link">
              Add Transaction
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

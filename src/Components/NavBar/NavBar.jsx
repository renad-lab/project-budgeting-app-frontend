// import React from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.css";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import backgroundImage from "./navid-sohrabi-zIAuzjIcCvk-unsplash.jpg";

// const NavBar = () => {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position="static"
//         sx={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <Link to="/transactions" className="logo">
//               <i>coffeebeanies</i>
//             </Link>
//             <br />
//             <span className="budget-tracker">
//               business tracker for a tiny coffee bean shop on etsy
//             </span>
//           </Typography>
//           <Button color="inherit">
//             <Link to="/transactions/new" className="nav-link">
//               Add Transaction
//             </Link>
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default NavBar;

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
//         marginBottom: "28px",
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
//         <Button color="inherit">
//           <Link to="/transactions/new" className="nav-link">
//             Add Transaction
//           </Link>
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

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
//         marginBottom: "28px", // Remove this line if unnecessary space persists
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
//         <Button color="inherit">
//           <Link to="/transactions/new" className="nav-link">
//             Add Transaction
//           </Link>
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
        marginBottom: "28px",
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
        <Button color="inherit">
          <Link to="/transactions/new" className="nav-link">
            Add Transaction
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

// import "./App.css";
// import NavBar from "./Components/NavBar/NavBar";
// import Show from "./Components/Show/Show";
// import New from "./Components/New/New";
// import Edit from "./Components/Edit/Edit";
// import Home from "./Components/Home/Home";
// import Login from "./Components/Login/Login";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// // Define custom theme
// const theme = createTheme({
//   palette: {
//     text: {
//       primary: "#6F4E37",
//     },
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <div>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Navigate to="/transactions" replace />} />
//           <Route path="/transactions" element={<Home />} />
//           <Route path="/transactions/new" element={<New />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/transactions/:index" element={<Show />} />
//           <Route path="/transactions/:index/edit" element={<Edit />} />
//         </Routes>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

// src/App.jsx

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Show from "./Components/Show/Show";
import New from "./Components/New/New";
import Edit from "./Components/Edit/Edit";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

// Define custom theme
const theme = createTheme({
  palette: {
    text: {
      primary: "#6F4E37",
    },
  },
});

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar onSearchResults={handleSearchResults} />
        {/* Optionally display search results here or in another component */}
        <Routes>
          <Route path="/" element={<Navigate to="/transactions" replace />} />
          <Route path="/transactions" element={<Home />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transactions/:index" element={<Show />} />
          <Route path="/transactions/:index/edit" element={<Edit />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

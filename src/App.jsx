// import "./App.css";
// import NavBar from "./Components/NavBar/NavBar";
// import Show from "./Components/Show/Show";
// import New from "./Components/New/New";
// import Edit from "./Components/Edit/Edit";
// import Home from "./Components/Home/Home";
// import { Routes, Route, Navigate } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/transactions" replace />} />
//         <Route path="/transactions" element={<Home />} />
//         <Route path="/transactions/new" element={<New />} />
//         <Route path="/transactions/:index" element={<Show />} />
//         <Route path="/transactions/:index/edit" element={<Edit />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Show from "./Components/Show/Show";
import New from "./Components/New/New";
import Edit from "./Components/Edit/Edit";
import Home from "./Components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/transactions" replace />} />
        <Route path="/transactions" element={<Home />} />
        <Route path="/transactions/new" element={<New />} />
        <Route path="/transactions/:index" element={<Show />} />
        <Route path="/transactions/:index/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;

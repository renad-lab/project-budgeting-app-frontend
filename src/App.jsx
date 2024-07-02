import "./App.css";
import NavBar from "./Components/NavBar";
// import Home from "./Components/Home";
import Show from "./Pages/Show";
import New from "./Pages/New";
// import Edit from "./Components/Edit";
import Home from "./Pages/Home";
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
        {/* <Route path="/transactions/:index/edit" element={<Edit />} />  */}
      </Routes>
    </div>
  );
}

export default App;

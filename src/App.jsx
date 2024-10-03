import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewEmployeesPage from "./ViewEmployeesPage";
import AddEmployeePage from "./AddEmployeePage";
import UpdateEmployeePage from "./UpdateEmployeePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/view" element={<ViewEmployeesPage />} />
          <Route path="/add" element={<AddEmployeePage />} />
          <Route path="/update" element={<UpdateEmployeePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

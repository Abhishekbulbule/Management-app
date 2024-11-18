import Homepage from "./Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewEmployeesPage from "./ViewEmployeesPage";
import AddEmployeePage from "./AddEmployeePage";
import UpdateEmployeePage from "./UpdateEmployeePage";
import { useEffect } from "react";
import { getEmployees } from "./redux_app/Employee/employee";
import { useDispatch } from "react-redux";
import Gallery from "./Gallery";
import { CssBaseline } from "@mui/material";
function App() {
  const dispatch = useDispatch();
  //Fetching Data once component load
  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  return (
    <>
      <CssBaseline enableColorScheme />
      <Router>
        <Homepage />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ViewEmployeesPage />
              </>
            }
          />
          <Route path="/add" element={<AddEmployeePage />} />
          <Route path="/view" element={<ViewEmployeesPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/update/:index" element={<UpdateEmployeePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

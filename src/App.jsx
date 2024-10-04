import Homepage from "./Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewEmployeesPage from "./ViewEmployeesPage";
import AddEmployeePage from "./AddEmployeePage";
import UpdateEmployeePage from "./UpdateEmployeePage";
import { useEffect } from "react";
import { getEmployees } from "./Redux-app/Employee/employee";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  //Fetching Data once component load
  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  return (
    <>
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
          <Route path="/update/:index" element={<UpdateEmployeePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

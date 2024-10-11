import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, getEmployees } from "./redux_app/Employee/employee";
import { useNavigate } from "react-router-dom";
import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
// import { Container, Paper } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import useId from "@mui/material/utils/useId";

const ViewEmployeesPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  const { employees, loading, error } = useSelector((state) => state.employee);
  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  if (loading) {
    return <p className="text-center m-3 ">Loading!!!</p>;
  }
  const handleDeleteClick = (index) => {
    dispatch(deleteEmployee(index));
  };
  const handleEditClick = (index) => {
    navigate(`/update/${index}`);
  };
  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "age", headerName: "Age", width: 200, type: "number" },
    { field: "gender", headerName: "Gender", width: 200, sortable: false },
    {
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
    },
    { field: "salary", headerName: "Salary", type: "number", width: 200 },
    { field: "manage", headerName: "Manage", type: "button", width: 200 },
  ];
  const rows = Array.isArray(employees) ? employees : [];
  console.log(employees);
  // const paginationModel = { page: 0, pageSize: 5 };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className=" flex flex-col w-full h-full justify-center items-center">
      <Typography
        variant="h6"
        component={"h2"}
        sx={{
          marginY: 2,
          fontWeight: 800,
          color: "#33335b",
          backgroundColor: "transparent",
          padding: 0,
          textAlign: "left",
        }}
      >
        View Employee Details
      </Typography>
      <Paper
        sx={{
          overflow: "hidden",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          mx: 1,
        }}
      >
        <TableContainer
          sx={{ maxHeight: 390, backgroundColor: "#f9f9f9", boxShadow: 1 }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((element, index) => (
                  <TableCell
                    key={crypto.randomUUID()}
                    id={element.field}
                    align="left"
                    width={element.width}
                    sx={{
                      backgroundColor: "#e0e0e0",
                      fontWeight: "bold",
                      borderBottom: "2px solid #ccc",
                    }}
                  >
                    {element.headerName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.name + row.age}
                    sx={{
                      "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" },
                      "&:nth-of-type(even)": { backgroundColor: "#ffffff" },
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {columns.map((element, index) => (
                      <TableCell key={crypto.randomUUID()} align={"left"}>
                        {row[element.field]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[6, 10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <h2 className="text-xl w-[100%] py-2 text-gray-600 sm:m-1 my-3 text-center font-bold">
        All Employees List
      </h2>
      <div className="w-full overflow-x-auto grid place-items-center">
        <table className="border border-gray-600 w-[90%] ">
          <thead>
            <tr>
              <th className="py-2 border border-gray-600">Sr No-</th>
              <th className="py-2 border border-gray-600">Name</th>
              <th className="py-2 border border-gray-600 Te">Age/Gender</th>
              <th className="py-2 border border-gray-600">Email</th>
              <th className="py-2 border border-gray-600">Salary</th>
              <th className="py-2 border border-gray-600">Manage</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((employeeData, index) => (
              <tr key={index}>
                <td className="py-2 text-center whitespace-normal border border-gray-500">
                  {index + 1}
                </td>
                <td className="py-2 text-center whitespace-normal border border-gray-500">
                  {employeeData.name}
                </td>
                <td className="py-2 text-center whitespace-normal border border-gray-500">
                  {employeeData.age}/
                  {employeeData.gender === "Male" ? "M" : "F"}
                </td>
                <td className="py-2 text-center whitespace-normal border border-gray-500 truncate">
                  {employeeData.email}
                </td>
                <td className="py-2 text-center whitespace-normal border border-gray-500">
                  {employeeData.salary}
                </td>
                <td className="py-2 text-center whitespace-normal border border-b-gray-500 grid grid-cols-1 lg:grid-cols-2 gap-1">
                  <button
                    className="rounded-md bg-red-600 py-1 mx-1 flex items-center justify-center text-sm font-medium text-white shadow"
                    onClick={() => handleDeleteClick(index)}
                    data-testid={`delete${index}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.2}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                  <button
                    className="rounded-md bg-teal-600 py-1 mx-1 flex items-center justify-center text-sm font-medium text-white shadow"
                    onClick={() => handleEditClick(index)}
                    data-testid={`edit${index}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.2}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default ViewEmployeesPage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, getEmployees } from "./redux_app/Employee/employee";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
    { field: "manage", headerName: "Edit/Update", type: "button", width: 200 },
  ];
  const rows = Array.isArray(employees) ? employees : [];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Stack
      direction={"column"}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
          sx={{
            maxHeight: 390,
            margin: 1,
            backgroundColor: "#f9f9f9",
            boxShadow: 1,
          }}
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
                .map((row, index) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.name + row.age}
                    sx={{
                      // "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" },
                      // "&:nth-of-type(even)": { backgroundColor: "#ffffff" },
                      backgroundColor: "#ffffff",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {columns.map((element, index) => {
                      if (index === columns.length - 1) return;
                      return (
                        <TableCell key={crypto.randomUUID()} align={"left"}>
                          {row[element.field]}
                        </TableCell>
                      );
                    })}
                    <TableCell align={"left"}>
                      <Button
                        onClick={() => handleEditClick(index)}
                        sx={{ border: 1, marginRight: 1 }}
                        data-testid={`edit${index}`}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        onClick={() => handleDeleteClick(index)}
                        data-testid={`delete${index}`}
                        sx={{ color: "red", border: 1 }}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
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
    </Stack>
  );
};

export default ViewEmployeesPage;

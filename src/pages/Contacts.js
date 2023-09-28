import React from "react";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { mockDataContacts } from "../data/mockData";
import { useColors } from "../theme";
import { Header } from "../components";

const Contacts = () => {
  const { colors } = useColors();

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m={{ xs: 0, md: "20px" }}>
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="72vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            // backdropFilter: "blur(5px)",
            borderBottom: "none",
            borderRadius: "10px 10px 0 0",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: `${colors.primary[400]}80`,
            backdropFilter: "blur(10px)",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            // backdropFilter: "blur(5px)",
            backgroundColor: colors.blueAccent[700],
            borderRadius: "0 0 10px 10px",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
            fontWeight: "Bold",
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;

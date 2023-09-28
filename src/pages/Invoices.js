import React from "react";

import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { mockDataInvoices } from "../data/mockData";
import { useColors } from "../theme";
import { Header } from "../components";

const Invoices = () => {
  const { colors } = useColors();

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m={{ xs: 0, md: "20px" }}>
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
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
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: `${colors.primary[400]}80`,
            backdropFilter: "blur(10px)",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            // backdropFilter: "blur(5px)",
            backgroundColor: colors.blueAccent[700],
            borderRadius: "0 0 10px 10px",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;

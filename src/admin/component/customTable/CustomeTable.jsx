import { Box, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";

function customeTable({rows, columns}) {
  console.log("{rows, columns} 333333333333333333", {rows, columns});
  

    const theme = useTheme();

    const color=tokens(theme.palette.mode)

     const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ 
            border: 0 , 
            " & .MuiDataGrid-footerContainer" : {
                backgroundColor : color.primary[400]
            }
        }}
        showToolbar
        getRowId={(row) => row?.id
        } 
      />
    </Box>
  );
}

export default customeTable;

// https://stackoverflow.com/questions/71644043/the-data-grid-component-requires-all-rows-to-have-a-unique-id-property
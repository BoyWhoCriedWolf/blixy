import { Circle, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import PrimaryTable from "components/table";
import BackofficeWorkflowCount from "./BackofficeWorkflowCount";

const BackofficeWorkflowPage = () => {
  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <Stack>
        <Box sx={{ mb: 3 }}>
          <BackofficeWorkflowCount />
        </Box>
        <Box sx={{ my: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Businesses
          </Typography>

          <PrimaryTable
            columns={[
              {
                headerName: "ADMINISTRATE",
                field: "admin",
                align: "center",
                flex: 1,
                renderCell: (params: GridRenderCellParams) => (
                  <KeyboardArrowRightOutlined sx={{ mr: 1, fontSize: 18 }} />
                ),
              },
              { headerName: "FE", field: "fe", flex: 1 },
              {
                headerName: "STATUS",
                field: "status",
                flex: 1,
                align: "center",
                renderCell: () => {
                  return <Circle fontSize="small" color="success" />;
                },
              },
              { headerName: "START DATE", field: "start", flex: 1 },
              { headerName: "CHECKED", field: "check", flex: 1 },
              { headerName: "EMPLOYEE", field: "employee", flex: 1 },
              { headerName: "GRADE", field: "grade", flex: 1 },
              { headerName: "NOTES", field: "notes", flex: 1 },
            ]}
            data={[
              {
                fe: "EZ",
                start: "01-01-2024",
              },
            ]}
          />
        </Box>
      </Stack>
    </Paper>
  );
};

export default BackofficeWorkflowPage;

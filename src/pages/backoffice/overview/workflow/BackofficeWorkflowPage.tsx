import { Circle, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import StateNumberCard from "components/state-number-card";
import PrimaryTable from "components/table";

const BackofficeWorkflowPage = () => {
  return (
    <Paper sx={{ minHeight: "100%" }}>
      <Stack sx={{ p: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Backoffice workflow
          </Typography>
          <Grid container spacing={1}>
            {[
              { label: "Document", value: 37, caption: "4 days" },
              { label: "Bank", value: 2, caption: "2 days" },
            ].map((item, itemIndex) => {
              return (
                <Grid key={itemIndex} item lg={2} md={2} sm={3} xs={3}>
                  <StateNumberCard
                    caption={item?.caption ?? ""}
                    value={item?.value ?? ""}
                    label={item?.label ?? ""}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Need attention
          </Typography>
          <Grid container spacing={1}>
            {[
              { label: "Bank", value: 1, caption: "Incidents" },
              { label: "Purchase", value: 79, caption: "Missing documents" },
              { label: "Sale", value: 8, caption: "Missing documents" },
            ].map((item, itemIndex) => {
              return (
                <Grid key={itemIndex} item lg={2} md={2} sm={3} xs={3}>
                  <StateNumberCard
                    caption={item?.caption ?? ""}
                    value={item?.value ?? ""}
                    label={item?.label ?? ""}
                  />
                </Grid>
              );
            })}
          </Grid>
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

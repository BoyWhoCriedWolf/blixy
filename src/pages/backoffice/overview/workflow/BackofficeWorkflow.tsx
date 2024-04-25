import { Circle, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import StateNumberCard from "components/state-number-card";
import PrimaryTable from "components/table";

const BackofficeWorkflow = () => {
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
              { label: "ADMINISTRATE", name: "admin" },
              { label: "FE", name: "fe" },
              { label: "STATUS", name: "status" },
              { label: "START DATE", name: "start" },
              { label: "CHECKED", name: "check" },
              { label: "EMPLOYEE", name: "employee" },
              { label: "GRADE", name: "grade" },
              { label: "NOTES", name: "notes" },
            ]}
            data={[
              {
                admin: (
                  <Box sx={{ display: "flex" }}>
                    <KeyboardArrowRightOutlined sx={{ mr: 1, fontSize: 18 }} />
                    <div>STEADI Training</div>
                  </Box>
                ),
                fe: "EZ",
                status: <Circle fontSize="small" color="success" />,
                start: "01-01-2024",
              },
            ]}
          />
        </Box>
      </Stack>
    </Paper>
  );
};

export default BackofficeWorkflow;

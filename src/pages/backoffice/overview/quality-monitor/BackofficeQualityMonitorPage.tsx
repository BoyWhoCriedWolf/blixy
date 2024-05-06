import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import SplitWords from "components/split-words";
import React from "react";
import MonitorRevenueChart from "./MonitorRevenueChart";
import MonitorOperatingChart from "./MonitorOperatingChart";
import PageHeading from "components/typography/page-heading";

const BackofficeQualityMonitorPage = () => {
  return (
    <Container>
      <Paper sx={{ p: 2 }}>
        <PageHeading>Revenue</PageHeading>
        <Grid container>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box>
              {[
                { name: "Net sales", value: 179.046 },
                { name: "Cost of sales", value: -875 },
              ].map((item, itemIndex) => {
                return (
                  <SplitWords
                    key={itemIndex}
                    name={item?.name ?? ""}
                    value={item?.value ?? ""}
                  />
                );
              })}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "2px solid",
              }}
            >
              <Typography fontWeight={500}>Gross Margin</Typography>
              <Typography fontWeight={500}>178.171</Typography>
            </Box>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12} sx={{ pl: 2 }}>
            <MonitorRevenueChart />
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 2, mt: 4 }}>
        <PageHeading>Operating Expenses</PageHeading>
        <Grid container>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box>
              {[
                { name: "Personnel costs", value: 80.745 },
                { name: "Car costs", value: 3.743 },
                { name: "Cost of sales", value: 122 },
                { name: "Further Operating Expenses", value: 13.277 },
              ].map((item, itemIndex) => {
                return (
                  <SplitWords
                    key={itemIndex}
                    name={item?.name ?? ""}
                    value={item?.value ?? ""}
                  />
                );
              })}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "2px solid",
              }}
            >
              <Typography fontWeight={500}>Operating Expenses</Typography>
              <Typography fontWeight={500}>97.887</Typography>
            </Box>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <MonitorOperatingChart />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default BackofficeQualityMonitorPage;

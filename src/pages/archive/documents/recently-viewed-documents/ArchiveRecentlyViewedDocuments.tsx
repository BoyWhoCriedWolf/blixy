import {
  AirportShuttle,
  Article,
  DoorSliding,
  Engineering,
  Favorite,
  LocationCity,
  Mood,
  Search,
  SupportAgent,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import IconCard from "components/icon-card";
import PrimaryTable from "components/table";
import React from "react";

const ArchiveRecentlyViewedDocuments = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Paper sx={{ px: 30, py: 12, mb: 2 }}>
            <Container>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  fontSize={30}
                  fontWeight={600}
                  color={(theme) => theme.palette.warning.main}
                  marginRight={2}
                >
                  Search
                </Typography>
                <Typography>
                  or (all address details shown)
                  <Favorite sx={{ fontSize: 12 }} />
                </Typography>
              </Box>
              <TextField
                InputProps={{ endAdornment: <Box>Search</Box> }}
                size="small"
                fullWidth
              ></TextField>
            </Container>
          </Paper>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Paper sx={{ p: 4, mb: 2 }}>
            <Grid container>
              {[
                {
                  icon: <SupportAgent fontSize="large" />,
                  caption: "Customers (105)",
                },
                {
                  icon: <AirportShuttle fontSize="large" />,
                  caption: "Suppliers (250)",
                },
                {
                  icon: <DoorSliding fontSize="large" />,
                  caption: "Administrations (1)",
                },
                {
                  icon: <Engineering fontSize="large" />,
                  caption: "Employees (2)",
                },
                {
                  icon: <LocationCity fontSize="large" />,
                  caption: "Businesses (556)",
                },
                { icon: <Mood fontSize="large" />, caption: "Persons (101)" },
                { icon: <Article fontSize="large" />, caption: "UBL (105)" },
              ].map((item, itemIndex) => {
                return (
                  <Grid item key={itemIndex} lg={3} md={3} sm={3} xs={3}>
                    <IconCard
                      icon={item?.icon ?? ""}
                      caption={item?.caption ?? ""}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Paper sx={{ p: 4 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography
                fontSize={30}
                fontWeight={600}
                color={(theme) => theme.palette.warning.main}
                marginRight={1}
              >
                Recently viewed relationships
              </Typography>
              <Search />
            </Box>
            <PrimaryTable
              columns={[
                { label: "NAME", name: "name" },
                { label: "WATCHED ON", name: "watch" },
              ]}
              data={[
                { name: "EasyZZP B.V.", watch: "22-04-2024 12:04" },
                {
                  name: "Professional Development International",
                  watch: "22-04-2024 12:03",
                },
                {
                  name: "Ministry of J&V, Administrative Department, DBOB/DC, CFA GVKA",
                  watch: "23-11-2023 08:51",
                },
                { name: "CFA GVKA", watch: "21-11-2023 14:43" },
                {
                  name: "Financial Services Center SSC DJI",
                  watch: "21-11-2023 14:41",
                },
                { name: "XXIMO BV", watch: "15-08-2023 15:06" },
              ]}
            />
          </Paper>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Paper sx={{ p: 2 }}>
            <Typography
              fontSize={30}
              fontWeight={600}
              color={(theme) => theme.palette.warning.main}
              marginBottom={2}
            >
              Important relationships
            </Typography>
            <PrimaryTable
              columns={[
                { label: "NAME", name: "name" },
                { label: "TELEPHONE", name: "phone" },
              ]}
              data={[{ name: "No data found." }]}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ArchiveRecentlyViewedDocuments;

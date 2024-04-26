import { CloudUpload } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchBar from "components/search-bar";
import WorkFlowCard from "components/workflow-card";

const DocumentDetailStandard = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          ADDRESS
        </Typography>
        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Relation</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <SearchBar iconPosition="right" />
              </Grid>
            </Grid>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Chamber of Commerce-number</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>VAT-number</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Website</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Address</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
            <Grid container mb={3}>
              <Grid item lg={4} md={4} sm={4} xs={4}></Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Zipcode city</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <TextField variant="outlined" size="small" sx={{ width: 80 }} />
                <TextField variant="outlined" size="small" />
              </Grid>
            </Grid>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Country</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    value=""
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                  >
                    <MenuItem disabled value=""></MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          DOCUMENT
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Date</Typography>
          {/* <DatePicker /> */}
        </Box>
        <Grid container>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Typography mt={1}>Subject</Typography>
          </Grid>
          <Grid item lg={9} md={9} sm={9} xs={9}>
            <TextField variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          OTHER
        </Typography>
        <Grid container mb={1}>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Typography mt={1}>Voucher number</Typography>
          </Grid>
          <Grid item lg={9} md={9} sm={9} xs={9}>
            <TextField variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>
        <Grid container mb={1}>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Typography mt={1}>Employee</Typography>
          </Grid>
          <Grid item lg={9} md={9} sm={9} xs={9}>
            <TextField variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>
        <Grid container mb={1}>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Typography mt={1}>Notes</Typography>
          </Grid>
          <Grid item lg={9} md={9} sm={9} xs={9}>
            <textarea></textarea>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Typography mt={1}>File</Typography>
          </Grid>
          <Grid item lg={9} md={9} sm={9} xs={9}>
            <TextField
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <CloudUpload fontSize="small" />
                  </IconButton>
                ),
              }}
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Typography fontWeight={600} mb={1}>
          WORKFLOW
        </Typography>
        <Grid container>
          {[
            {
              heading: "Upload",
              name: "Piotr Chmielewski",
              date: "Wo 17-04-2024",
              time: "15:07",
              total: "6 to dawn, 22 o'clock",
              isArrow: true,
            },
            {
              heading: "Recognition complete",
              date: "Wo 17-04-2024",
              time: "15:09",
              total: "0 minutes",
            },
          ].map((item, itemIndex) => {
            return (
              <Grid item key={itemIndex} lg={3} md={3} sm={6} xs={6}>
                <WorkFlowCard
                  heading={item?.heading ?? ""}
                  name={item?.name ?? ""}
                  date={item?.date ?? ""}
                  time={item?.time ?? ""}
                  total={item?.total ?? ""}
                  isArrow={item?.isArrow ?? false}
                />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Box>
  );
};

export default DocumentDetailStandard;

import { TuneOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Popover,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

const InvoicesFilter = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e?: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "filter-popover" : undefined;

  return (
    <Box>
      <Button
        aria-describedby={id}
        variant="outlined"
        startIcon={<TuneOutlined />}
        onClick={handleClick}
        sx={{ ml: 2 }}
      >
        Filter
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper sx={{ p: 1 }}>
          <Box
            sx={{
              display: "flex",
              borderBottom: "1px solid",
              borderColor: (theme) => theme.palette.divider,
              p: 1,
            }}
          >
            <Typography sx={{ p: 1, mr: 1 }}>Filters</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
            <Box
              sx={{
                borderRight: "1px solid",
                borderRightColor: (theme) => theme.palette.divider,
                p: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Type</Typography>
              <Box sx={{ mt: 1 }}>
                <Typography sx={{ mr: 2 }}>Contact</Typography>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography sx={{ mr: 2 }}>Status</Typography>
              </Box>
            </Box>
            <Box sx={{ p: 1 }}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="existing"
                    control={<Radio />}
                    label="Existing"
                  />
                  <FormControlLabel
                    value="new"
                    control={<Radio />}
                    label="New"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </Paper>
      </Popover>
    </Box>
  );
};

export default InvoicesFilter;

import {
  CallMade,
  CallReceivedOutlined,
  CloudUploadOutlined,
  CorporateFareOutlined,
  SyncAltOutlined,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Popover,
  Typography,
} from "@mui/material";
import TabsContainer from "components/containers/tabs-container";
import UploadFileWidget from "components/upload-file-widget";
import { useState } from "react";

const UploadHeaderAction = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e?: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "upload-header-popover" : undefined;

  return (
    <Box>
      <IconButton
        aria-describedby={id}
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
      >
        <CloudUploadOutlined />
      </IconButton>
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
          <TabsContainer
            data={[
              {
                label: "Import",
                render: (
                  <Box
                    sx={{
                      minHeight: 150,
                      minWidth: 250,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "center",
                      border: "1px solid",
                      borderColor: (theme) => theme.palette.divider,
                    }}
                  >
                    <UploadFileWidget />
                  </Box>
                ),
              },
              {
                label: "New",
                render: (
                  <Paper sx={{ width: 230 }}>
                    <MenuList>
                      <MenuItem>
                        <ListItemIcon>
                          <CallMade fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Sale Invoice</Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <CallReceivedOutlined fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">
                          Record Expense
                        </Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <CorporateFareOutlined fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit"> Add Contact </Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <SyncAltOutlined fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">
                          Create Journal Entry
                        </Typography>
                      </MenuItem>
                    </MenuList>
                  </Paper>
                ),
              },
            ]}
          />
        </Paper>
      </Popover>
    </Box>
  );
};

export default UploadHeaderAction;

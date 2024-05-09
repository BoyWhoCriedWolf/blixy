import { NotificationsNoneOutlined } from "@mui/icons-material";
import { Badge, Box, IconButton, Paper } from "@mui/material";
import SearchBar from "components/search-bar";
import UploadHeaderAction from "./UploadHeaderAction";
import UserProfileMenu from "./UserProfileMenu";

const Header = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 2,
        borderBottom: "1px solid",
        borderBottomColor: (theme) => theme.palette.divider,
        height: 30,
      }}
      elevation={0}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* <StickyNote2Outlined sx={{ fontSize: 16, mr: 0.5 }} />
        <Typography variant="body2">Invoices</Typography> */}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SearchBar showShortKey />

        <UploadHeaderAction />

        <IconButton sx={{ ml: 2 }}>
          <Badge variant="dot" color="error">
            <NotificationsNoneOutlined />
          </Badge>
        </IconButton>

        <UserProfileMenu />
      </Box>
    </Paper>
  );
};

export default Header;

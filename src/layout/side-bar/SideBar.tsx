import { HelpOutline } from "@mui/icons-material";
import { Box, Paper, Stack } from "@mui/material";
import Logo from "components/logo";
import SidebarMenu from "./menu";
import SidebarMenuItem from "./menu/SidebarMenuItem";
import { MENU_DATA } from "./menu/menu-utils";

const SideBar = () => {
  return (
    <Stack
      sx={{
        py: 2,
        px: 1,
        justifyContent: "space-between",
        borderRight: "1px solid",
        borderRightColor: (theme) => theme.palette.divider,
        minWidth: "fit-content",
        overflowY: "auto",
      }}
      component={Paper}
      elevation={0}
    >
      <Box display="flex" justifyContent="center">
        <Logo />
      </Box>
      <Box flexGrow={1}>
        <SidebarMenu data={MENU_DATA} isRoot />
      </Box>
      <Box>
        <SidebarMenuItem
          data={{ icon: <HelpOutline />, label: "Help center" }}
          isRoot
        />
      </Box>
    </Stack>
  );
};

export default SideBar;

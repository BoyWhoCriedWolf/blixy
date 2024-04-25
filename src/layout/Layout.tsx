import { Box } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import SideBar from "./side-bar";

const Layout: FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <SideBar />
      <Box
        flexGrow={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          overflow: "auto",
        }}
      >
        <Header />
        <Box
          flexGrow={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;

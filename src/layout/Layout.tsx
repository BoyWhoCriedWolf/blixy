import { Box } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AuthUser } from "services/types/user.types";
import { RootState } from "store/store";
import Footer from "./footer";
import Header from "./header";
import SideBar from "./side-bar";

const Layout: FC = () => {
  const authUser = useSelector<RootState, AuthUser>(
    (state) => (state?.auth?.user ?? {}) as AuthUser
  );

  return authUser.access_token ? (
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
  ) : (
    <Navigate to={{ pathname: "/" }} />
  );
};

export default Layout;

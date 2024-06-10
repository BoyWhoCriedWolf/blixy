import { Alert, Box } from "@mui/material";
import ModalContainer from "components/containers/modal-container";
import PageHeading from "components/typography/page-heading";
import SignInPanel from "pages/auth/sign-in/SignInPanel";
import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AuthUser } from "services/types/user.types";
import { RootState } from "store/store";
import Footer from "./footer";
import Header from "./header";
import SideBar from "./side-bar";

const Layout: FC<PropsWithChildren<{ showSidebar?: boolean }>> = ({
  showSidebar = true,
  children,
}) => {
  const authUser = useSelector<RootState, AuthUser>(
    (state) => (state?.auth?.user ?? {}) as AuthUser
  );
  const isExpiredToken = useSelector<RootState, boolean>(
    (state) => (state?.auth?.isExpired ?? {}) as boolean
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
      <ModalContainer isOpen={isExpiredToken} noHeader noFooter>
        <PageHeading>Your login has been expired.</PageHeading>
        <Alert color="info" sx={{ mb: 1 }}>
          Please re-login to verify it is you
        </Alert>
        <SignInPanel isReLogin email={authUser.email ?? ""} />
      </ModalContainer>
      {showSidebar ? <SideBar /> : null}
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
          {children ?? <Outlet />}
        </Box>
        <Footer />
      </Box>
    </Box>
  ) : (
    <Navigate to={{ pathname: "/" }} />
  );
};

export default Layout;

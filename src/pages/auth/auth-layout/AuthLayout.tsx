import { ThemeProvider } from "@mui/material";
import AuthBackContainer from "components/containers/auth-back-container";
import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { THEMES } from "themes";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={THEMES.DARK}>
      <AuthBackContainer>{children ?? <Outlet />}</AuthBackContainer>
    </ThemeProvider>
  );
};

export default AuthLayout;

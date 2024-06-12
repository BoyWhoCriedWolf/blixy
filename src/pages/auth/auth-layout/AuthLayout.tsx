import { Breakpoint, ThemeProvider } from "@mui/material";
import AuthBackContainer from "components/containers/auth-back-container";
import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { THEMES } from "themes";

const AuthLayout: FC<PropsWithChildren<{ maxWidth?: Breakpoint }>> = ({
  children,
  maxWidth = "sm",
}) => {
  return (
    <ThemeProvider theme={THEMES.DARK}>
      <AuthBackContainer maxWidth={maxWidth}>
        {children ?? <Outlet />}
      </AuthBackContainer>
    </ThemeProvider>
  );
};

export default AuthLayout;

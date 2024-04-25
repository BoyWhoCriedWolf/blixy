import { ThemeProvider } from "@mui/material";
import AuthBackContainer from "components/containers/auth-back-container";
import { Outlet } from "react-router-dom";
import { THEMES } from "themes";

const AuthLayout = () => {
  return (
    <ThemeProvider theme={THEMES.DARK}>
      <AuthBackContainer>
        <Outlet />
      </AuthBackContainer>
    </ThemeProvider>
  );
};

export default AuthLayout;

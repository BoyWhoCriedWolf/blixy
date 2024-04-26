import { ThemeProvider } from "@mui/material";
import AuthBackContainer from "components/containers/auth-back-container";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AuthUser } from "services/types/user";
import { RootState } from "store/store";
import { THEMES } from "themes";

const AuthLayout = () => {
  const authUser = useSelector<RootState, AuthUser>(
    (state) => (state?.auth?.user ?? {}) as AuthUser
  );

  console.log(authUser);

  return authUser.access_token ? (
    <Navigate to={{ pathname: "/home" }} />
  ) : (
    <ThemeProvider theme={THEMES.DARK}>
      <AuthBackContainer>
        <Outlet />
      </AuthBackContainer>
    </ThemeProvider>
  );
};

export default AuthLayout;

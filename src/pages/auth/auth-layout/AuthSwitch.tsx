import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AuthUser } from "services/types/user.types";
import { RootState } from "store/store";

const AuthSwitch: FC<PropsWithChildren> = ({ children }) => {
  const authUser = useSelector<RootState, AuthUser>(
    (state) => (state?.auth?.user ?? {}) as AuthUser
  );

  return authUser.access_token ? (
    <Navigate to={{ pathname: "/administrations" }} />
  ) : (
    children ?? <Outlet />
  );
};

export default AuthSwitch;

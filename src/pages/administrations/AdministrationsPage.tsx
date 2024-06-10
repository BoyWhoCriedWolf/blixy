import { Paper } from "@mui/material";
import { useSelector } from "react-redux";
import AdministrationsList from "sections/administration/list";
import { AuthUser } from "services/types/user.types";
import { RootState } from "store/store";

const AdministrationsPage = () => {
  const authUser = useSelector<RootState, AuthUser>(
    (state) => (state?.auth?.user ?? {}) as AuthUser
  );

  return (
    <Paper sx={{ flexGrow: 1, p: 2, m: 2 }}>
      <AdministrationsList user_id={authUser.id ?? ""} />
    </Paper>
  );
};

export default AdministrationsPage;

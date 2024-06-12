import { Grid } from "@mui/material";
import AnimWelcome from "components/animations/AminWelcome";

const BusinessRegFlowWelcome = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        <AnimWelcome />
      </Grid>
    </Grid>
  );
};

export default BusinessRegFlowWelcome;

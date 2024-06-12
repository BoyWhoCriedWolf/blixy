import { Container, Grid } from "@mui/material";
import AnimWelcome from "components/animations/AnimWelcome";

const BusinessRegFlowWelcome = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        <Container maxWidth="sm">
          <AnimWelcome />
        </Container>
      </Grid>
    </Grid>
  );
};

export default BusinessRegFlowWelcome;

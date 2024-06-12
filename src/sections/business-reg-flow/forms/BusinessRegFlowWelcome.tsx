import { Container, Grid } from "@mui/material";
import AnimWelcome from "components/animations/AminWelcome";

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

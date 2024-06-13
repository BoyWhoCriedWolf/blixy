import { Container, Grid } from "@mui/material";
import AnimDocDone from "components/animations/AnimDocDone";
import React from "react";

const BusinessRegFlowConfirm = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        <Container maxWidth="sm">
          <AnimDocDone />
        </Container>
      </Grid>
    </Grid>
  );
};

export default BusinessRegFlowConfirm;

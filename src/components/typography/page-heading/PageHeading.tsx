import { Grid, Typography } from "@mui/material";
import React, { FC, PropsWithChildren, ReactNode } from "react";

const PageHeading: FC<
  PropsWithChildren<{ title?: string; actions?: ReactNode }>
> = ({ children = null, title = "", actions = null }) => {
  return (
    <Grid container justifyContent={"space-between"} justifyItems={"center"}>
      <Grid item>
        <Typography variant="h3">{title ?? children}</Typography>
      </Grid>
      <Grid item>{actions}</Grid>
    </Grid>
  );
};

export default PageHeading;

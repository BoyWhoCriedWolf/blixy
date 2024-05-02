import { Grid, Typography } from "@mui/material";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import { ColorVariant } from "types/ui-types";

const PageHeading: FC<
  PropsWithChildren<{
    title?: string;
    actions?: ReactNode;
    color?: ColorVariant;
  }>
> = ({ children = null, title = "", actions = null, color = "primary" }) => {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      justifyItems={"center"}
      sx={{ mb: 2 }}
    >
      <Grid item>
        <Typography variant="h3" color={color}>
          {children ?? title}
        </Typography>
      </Grid>
      <Grid item>{actions}</Grid>
    </Grid>
  );
};

export default PageHeading;

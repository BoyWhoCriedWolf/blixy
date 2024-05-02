import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

const BankAccountsCard: FC<
  PropsWithChildren<{
    heading?: string;
    imgPath?: string;
    title?: string;
    caption?: string;
    value?: string;
    date?: string;
  }>
> = ({
  heading = "",
  imgPath = "",
  title = "",
  caption = "",
  value = "",
  date = "",
}) => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography color="primary" fontSize={20} fontWeight={600} my={3}>
          {heading}
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Grid container flexWrap={"nowrap"}>
            <Grid item>
              <img src={imgPath} alt={title} />
            </Grid>
            <Grid
              item
              flexGrow={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                ml: 2,
                py: 1
              }}
            >
              <Typography fontSize={20} fontWeight={600}>{title}</Typography>
              <Typography>{caption}</Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                justifyContent: "center"
              }}
            >
              <Typography fontSize={36} fontWeight={600}>
                {value}
              </Typography>
              <Typography>{date}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default BankAccountsCard;

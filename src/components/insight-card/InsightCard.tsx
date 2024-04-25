import { Add, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Chip, Grid, Typography } from "@mui/material";
import { FC, PropsWithChildren, ReactNode } from "react";
import { ColorVariant } from "types/ui-types";

const InsightCard: FC<
  PropsWithChildren<{
    icon?: ReactNode;
    iconColor?: ColorVariant;
    label?: string;
    caption?: string;
    captionColor?: ColorVariant;
  }>
> = ({
  icon = <Add />,
  iconColor = "info",
  label = "",
  caption = "",
  captionColor = "info",
}) => {
  return (
    <Box
      sx={{
        p: 1,
        border: "1px solid",
        borderColor: (theme) => theme.palette.divider,
        backgroundColor: (theme) => theme.palette.background.default,
        borderRadius: 4,
        mt: 1,
        mb: 1,
      }}
    >
      <Grid container>
        <Grid
          item
          lg={1}
          md={1}
          sm={1}
          xs={1}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography color={iconColor}>{icon}</Typography>
        </Grid>
        <Grid
          item
          lg={10}
          md={10}
          sm={10}
          xs={10}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography>{label}</Typography>
          </Box>
          <Chip size="small" label={caption} color={captionColor} />
        </Grid>
        <Grid item lg={1} md={1} sm={1} xs={1}>
          <Typography>
            <KeyboardArrowRightOutlined sx={{ fontSize: 30 }} />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InsightCard;

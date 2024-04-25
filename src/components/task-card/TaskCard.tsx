import {
  CalendarTodayOutlined,
  KeyboardArrowRightOutlined,
  SentimentSatisfiedAltOutlined,
  UploadFileOutlined,
} from "@mui/icons-material";
import { Box, Chip, Grid, Typography } from "@mui/material";
import { FC, PropsWithChildren, ReactElement, ReactNode } from "react";
import { ColorVariant } from "types/ui-types";

const TaskCard: FC<
  PropsWithChildren<{
    labelIcon?: ReactNode;
    label?: string;
    labelColor?: ColorVariant;

    captionIcon?: ReactNode;
    caption?: string;
    captionColor?: ColorVariant;

    date?: string;
  }>
> = ({
  labelIcon = <UploadFileOutlined fontSize="large" />,
  label = "",
  labelColor = "info",

  captionIcon = <SentimentSatisfiedAltOutlined fontSize="small" />,
  caption = "",
  captionColor = "info",

  date = "",
}) => {
  return (
    <Box sx={{ p: 1, mt: 1, mb: 1 }}>
      <Grid container flexWrap={"nowrap"}>
        <Grid item>
          <Box sx={{ p: 1 }}>
            <Typography fontSize={30} color={labelColor}>
              {labelIcon}
            </Typography>
          </Box>
        </Grid>
        <Grid item flexGrow={1} sx={{ pl: 1 }}>
          <Chip size="small" icon={<CalendarTodayOutlined />} label={date} />

          <Typography fontSize={20} fontWeight={600}>
            {label}
          </Typography>

          <Chip
            size="small"
            icon={captionIcon as ReactElement}
            label={caption}
            color={captionColor}
          />
        </Grid>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Typography>
            <KeyboardArrowRightOutlined sx={{ fontSize: 30 }} />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskCard;

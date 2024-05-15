import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import React, { PropsWithChildren } from "react";

export default function CollapseBox({
  title = "",
  secondaryTitle = "",
  children,
}: PropsWithChildren<{
  title?: string;
  secondaryTitle?: string;
}>) {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography
          sx={{
            fontSize: theme.typography.pxToRem(15),
            flexBasis: "33.33%",
            flexShrink: 0,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
          }}
        >
          {secondaryTitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>{children}</Box>
      </AccordionDetails>
    </Accordion>
  );
}

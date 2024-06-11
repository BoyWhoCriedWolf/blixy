import { Box, Collapse } from "@mui/material";
import { FC, PropsWithChildren, ReactNode } from "react";

const CollapseArray: FC<
  PropsWithChildren<{ data?: Array<ReactNode>; index?: number }>
> = ({ data = [], index = 0 }) => {
  return (
    <Box>
      {data.map((item, itemIndex) => {
        return (
          <Collapse key={itemIndex} in={itemIndex === index}>
            <Box>{item}</Box>
          </Collapse>
        );
      })}
    </Box>
  );
};

export default CollapseArray;

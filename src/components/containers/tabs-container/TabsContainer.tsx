import { Box, Tab, Tabs } from "@mui/material";
import React, { FC, PropsWithChildren, ReactNode, useState } from "react";

const TabsContainer: FC<
  PropsWithChildren<{
    data?: Array<{ label?: string | ReactNode; render?: ReactNode }>;
  }>
> = ({ data = [{ label: "", render: [] }] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndex = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentIndex(newValue);
  };

  return (
    <Box>
      <Tabs
        value={currentIndex}
        onChange={handleChangeIndex}
        variant="fullWidth"
      >
        {data.map((item, itemIndex) => {
          return <Tab key={itemIndex} label={item.label} />;
        })}
      </Tabs>
      {data.map((item, itemIndex) => (
        <Box key={itemIndex}>
          {itemIndex === currentIndex ? item.render : null}
        </Box>
      ))}
    </Box>
  );
};

export default TabsContainer;

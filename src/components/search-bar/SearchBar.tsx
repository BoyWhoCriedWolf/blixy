import { Search } from "@mui/icons-material";
import { Box, Stack, TextField } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

const SearchBar: FC<
  PropsWithChildren<{ showShortKey?: boolean; iconPosition?: "left" | "right" }>
> = ({ showShortKey = false, iconPosition = "left" }) => {
  return (
    <TextField
      InputProps={
        iconPosition === "left"
          ? {
              startAdornment: <Search />,
              endAdornment: showShortKey ? (
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={{
                      py: 0.5,
                      px: 1,
                      borderRadius: 2,
                      boxShadow: "0 2px",
                      mr: 1,
                    }}
                  >
                    ctrl
                  </Box>
                  <Box
                    sx={{
                      py: 0.5,
                      px: 1,
                      boxShadow: "0 2px",
                      borderRadius: 2,
                    }}
                  >
                    K
                  </Box>
                </Stack>
              ) : null,
            }
          : { endAdornment: <Search /> }
      }
      size="small"
      placeholder="Search"
    />
  );
};

export default SearchBar;

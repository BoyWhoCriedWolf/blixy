import { createTheme } from "@mui/material";

export const DARK_THEME = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#24A5DD", contrastText: "#FFF" },
    text: { primary: "#FFF" },
    divider: "#FFF8",
    background: {
      default: "#0004",
      paper: "#0008",
      // whiteBlue: "#F1F5F9",
      // whiteRed: "#FEF2F2",
    },

    // error: { main: "#f33434b3" },
    // success: { main: "#2b9d31b3" },
    // info: { main: "#2db5ffb3", contrastText: "#FFF" },
    // warning: { main: "#ffa908b3" },
  },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none" } } },
    // MuiTableRow: { styleOverrides: { head: { background: "#F1F5F9" } } },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(5px)",
          background: `#0004`,
        },
      },
    },
  },
  typography: { allVariants: { color: "#FFF" } },
});

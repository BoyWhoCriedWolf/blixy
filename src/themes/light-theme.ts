import { createTheme } from "@mui/material";

// declare module "@mui/material/styles" {
//   interface TypeBackground {
//     whiteBlue: string;
//     whiteRed: string;
//   }
// }

export const DRAWER_WIDTH = 256;

export const LIGHT_THEME = createTheme({
  palette: {
    primary: { main: "#24A5DD", contrastText: "#FFF" },
    text: { primary: "#1E293B" },
    divider: "#DCDFEA",
    background: {
      default: "#F8F8F8",
      paper: "#FFF",
      // whiteBlue: "#F1F5F9",
      // whiteRed: "#FEF2F2",
    },

    error: { main: "#f33434b3" },
    success: { main: "#2b9d31b3" },
    info: { main: "#2db5ffb3", contrastText: "#FFF" },
    warning: { main: "#ffa908b3" },
  },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none" } } },
    MuiTableRow: { styleOverrides: { head: { background: "#F1F5F9" } } },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(5px)",
          background: `#FFF4`,
        },
      },
    },
  },
  typography: {
    allVariants: { color: "#1E293B" },
    h3: { fontSize: "2.5rem", fontWeight: 500 },
  },
});

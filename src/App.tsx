import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";
import { ThemeProvider } from "@mui/material";
import { THEMES } from "themes";

function App() {
  return (
    <ThemeProvider theme={THEMES.LIGHT}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

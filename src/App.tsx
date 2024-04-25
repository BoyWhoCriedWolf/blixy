import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "store";
import { THEMES } from "themes";
import "./App.css";
import { router } from "./routes/router";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={THEMES.LIGHT}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

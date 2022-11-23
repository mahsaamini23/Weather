
import { RouterProvider } from "react-router-dom";
import router from "./route/route";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {theme} from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;

import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "montserrat",
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      light: "#145da0",
      main: "#0b3b64",
    },
    secondary: {
      light: "#ecd88e",
      main: "#dbc490",
    },
  },
});

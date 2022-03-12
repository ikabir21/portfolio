import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "transparent"
  //   },
  //   secondary: {
  //     main: "#4F194D"
  //   },
  //   action: {
  //     hover: "rgba(255, 255, 255, 0.04)"
  //   }
  // },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
    body1: {
      fontSize: "0.9rem"
    },
    button: {
      textTransform: "inherit"
    }
  }
});

export default theme;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          cursor: "inherit"
        }
      }
    }
  },
  palette: {
    // primary: {
    //   main: "transparent"
    // },
    secondary: {
      main: "#772953"
    },
    action: {
      hover: "rgba(255, 255, 255, 0.04)"
    }
  },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
    color: "#333",
    body1: {
      fontSize: "0.9rem"
    },
    button: {
      textTransform: "inherit"
    },
    h5: {
      color: "#444"
    }
  }
});

export default theme;

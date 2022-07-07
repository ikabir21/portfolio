import React, { lazy, Suspense, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Loader from "./components/Loader";
import theme from "./assets/theme";

const BootScreen = lazy(() => import("./screens/BootScreen"));
const Desktop = lazy(() => import("./screens/DesktopScreen"));

import { AppContext } from "./context";
import { Typography } from "@mui/material";

const App = () => {
  const { state, actions } = useContext(AppContext);
  const [isReset, setReset] = useState(false);

  const shutDown = () => {
    setTimeout(() => {
      actions.setShutDown(true);
    }, 100);
    actions.login(false);
  };
  const lock = () => {
    setTimeout(() => {
      actions.setLock(true);
    }, 100);
    actions.login(false);
  };
  const logout = () => {
    actions.login(false);
  };

  const reset = () => {
    setReset(true);
    setTimeout(() => {
      setReset(false);
      localStorage.removeItem("isAuth");
      localStorage.removeItem("isLock");
      localStorage.removeItem("isShutDown");
      localStorage.removeItem("newFolders");
      actions.login(false);
      actions.setShutDown(true);
      actions.setLock(true);
    }, 1000);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        {!state.isAuth ? (
          <BootScreen />
        ) : (
          <Desktop lock={lock} shutDown={shutDown} logout={logout} reset={reset} />
        )}
        {isReset && (
          <Box
            position="absolute"
            left="50%"
            top="50%"
            display="flex"
            flexDirection="column"
            width="100%"
            sx={{ transform: "translate(-50%,-50%)" }}
          >
            <Loader bgColor="transparent" />
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                mt: 6,
                color: "#A52430"
              }}
            >
              Resetting Ubuntu...
            </Typography>
          </Box>
        )}
      </Suspense>
    </ThemeProvider>
  );
};

export default App;

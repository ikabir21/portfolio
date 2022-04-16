import React, { lazy, Suspense, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Loader from "./components/Loader";
import theme from "./assets/theme";

const LockScreen = lazy(() => import("./screens/LockScreen"));
const Desktop = lazy(() => import("./screens/DesktopScreen"));
const ToolBar = lazy(() => import("./components/ToolBar"));

import { AppContext } from "./context";

const App = () => {
  const { state, actions } = useContext(AppContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <Router>
          {/* <ToolBar /> */}
          {!state?.isAuth ? <LockScreen /> : <Desktop />}
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;

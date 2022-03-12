import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Loader from "./components/Loader";
import theme from "./assets/theme";

const LockScreen = lazy(() => import("./screens/LockScreen"));
const ToolBar = lazy(() => import("./components/ToolBar"));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <Router>
          {/* <ToolBar /> */}
          <LockScreen />
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;

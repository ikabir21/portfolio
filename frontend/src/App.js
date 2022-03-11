import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import theme from "./assets/theme";

const LockScreen = lazy(() => import("./screens/LockScreen"));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<Loader />}>
          <LockScreen />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;

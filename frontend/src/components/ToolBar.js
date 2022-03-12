import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const ToolBar = () => {
  return (
    <AppBar sx={{ maxHeight: "3ch", backgroundColor: "#111111" }} position="static">
      <Toolbar disableGutters></Toolbar>
    </AppBar>
  );
};
export default ToolBar;

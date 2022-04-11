import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";

import { Rnd } from "react-rnd";
import { AppContext } from "../context";
import NextIcon from "../assets/svg/NextIcon";
import BackIcon from "../assets/svg/BackIcon";

const useStyles = makeStyles((theme) => ({
  rnd: {
    left: `${theme.spacing(8)} !important`,
    top: `${theme.spacing(3)} !important`,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f0f0f0",
    border: "none",
    borderRadius: "5px 5px 0 0"
  }
}));

const AppContainer = () => {
  const { state, actions } = useContext(AppContext);
  const classes = useStyles();

  const [obj, setObj] = useState({ x: 0, y: 0, width: 360, height: 240 });

  return (
    <Rnd
      // disableDragging
      bounds="parent"
      minHeight={360}
      minWidth={480}
      dragAxis="both"
      className={classes.rnd}
      size={{ width: obj.width, height: obj.height }}
      position={{ x: obj.x, y: obj.y }}
      onDragStop={(e, d) => {
        setObj({ x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setObj({
          width: ref.style.width,
          height: ref.style.height,
          ...position
        });
      }}
    >
      <Box>
        <Box sx={{ background: "#333" }} display="flex" borderRadius="4px 4px 0 0">
          <BackIcon sx={{ "& > path": { color: "transparent !important" } }} />
          <NextIcon sx={{ "& > path": { color: "transparent !important" } }} />
          <Button>Home</Button>
          <div style={{ flexGrow: 1 }} />
          <Button>Hi</Button>
        </Box>
        <div>hi</div>
      </Box>
    </Rnd>
  );
};

export default AppContainer;

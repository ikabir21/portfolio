import React, { useState, useContext, useEffect } from "react";

// @mui/material imports

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// @mui/styles imports

import makeStyles from "@mui/styles/makeStyles";

// project imports

import { HomeIcon } from "../assets/svg/apps.js";
import { AppContext } from "../context";
import ContextMenu from "../components/ContextMenu";
import ToolBar from "../components/ToolBar";
import bgImage from "../assets/images/ubuntu-20-04-2.webp";

const useStyles = makeStyles({
  container: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    color: "#eee",
    paddingTop: "3ch"
  },
  app: {
    padding: "1rem 2rem",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#616773"
    },
    "& > svg": {
      width: "2.5rem",
      height: "2.5rem"
    }
  }
});

const DesktopScreen = () => {
  const { state, actions } = useContext(AppContext);

  const [showContextMenu, setContextMenu] = useState(false);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const classes = useStyles();

  useEffect(() => actions.setBg(bgImage), []);

  const handleClick = () => {
    showContextMenu && setContextMenu(false);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    !showContextMenu ? setContextMenu(true) : setContextMenu(false);
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);
    let _coordinate = { x, y };
    if (x + 180 > window.innerWidth) _coordinate = { x: x - 180, y };
    if (y + 180 > window.innerHeight) _coordinate = { x, y: y - 180 };
    if (x + 180 > window.innerWidth && y + 180 > window.innerHeight)
      _coordinate = { x: x - 180, y: y - 180 };
    setCoordinate(_coordinate);
  };

  return (
    <Box
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      height="100vh"
      style={{ backgroundImage: `url(${state?.bgImage})` }}
      className={classes.container}
    >
      <ToolBar color="#343434" />
      <Grid container>
        <Grid item>
          <Grid onDoubleClick={() => alert("hi")} container direction="column">
            <Grid item className={classes.app}>
              <HomeIcon />
            </Grid>
            <Grid item className={classes.app}>
              <HomeIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {showContextMenu && <ContextMenu coordinate={coordinate} />}
    </Box>
  );
};

export default DesktopScreen;

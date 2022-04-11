import React, { useState, useContext, useEffect } from "react";

// @mui/material imports

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// @mui/styles imports

import makeStyles from "@mui/styles/makeStyles";

// project imports

import { HomeIcon, TrashIcon, VsCodeIcon, SpotifyIcon } from "../assets/svg/apps";
import { AppContext } from "../context";
import ContextMenu from "../components/ContextMenu";
import SideBar from "../components/ToolBar/SideBar";
import ToolBar from "../components/ToolBar";
import bgImage from "../assets/images/ubuntu-20-04-2.webp";
import AppContainer from "../components/AppContainer";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    color: "#eee",
    paddingTop: "3ch",
    maxHeight: "100vh"
  },
  app: {
    padding: "1rem 2rem",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#616773"
    },
    "& > svg": {
      width: "2.5rem",
      height: "2.5rem",
      display: "block"
    }
  },
  iframeContainer: {
    position: "absolute",
    left: theme.spacing(8),
    top: "24px",
    bottom: 0,
    width: `calc(100% - ${theme.spacing(8)})`,
    height: `calc(100% - 30px)`,
    "& > iframe": {
      width: "100%",
      height: "100%"
    }
  }
}));

const DesktopScreen = () => {
  const { state, actions } = useContext(AppContext);

  const [showContextMenu, setContextMenu] = useState(false);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const classes = useStyles();

  useEffect(() => actions.setBg(bgImage), []);

  const VsCode = (
    <Box className={classes.iframeContainer}>
      <iframe src="https://github1s.com/ikabir21/portfolio"></iframe>
    </Box>
  );

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

  const handleDoubleClick = (e, appName, isOpen) => {
    actions.setAppOpen({ appName, isOpen });
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
      <SideBar />
      <Grid
        sx={{
          marginLeft: "8ch",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          width: "100%"
        }}
        container
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.app}>
              <HomeIcon />
              <Typography variant="body2" align="center">
                ikabir
              </Typography>
            </Grid>
            <Grid
              item
              className={classes.app}
              name="vsCode"
              onDoubleClick={(e) => handleDoubleClick(e, "vsCode", true)}
            >
              <SpotifyIcon />
              <Typography variant="body2" align="center">
                Spotify
              </Typography>
            </Grid>
            <Grid
              item
              className={classes.app}
              name="vsCode"
              onDoubleClick={(e) => handleDoubleClick(e, "vsCode", true)}
            >
              <VsCodeIcon />
              <Typography variant="body2" align="center">
                Code
              </Typography>
            </Grid>
            <Grid item className={classes.app}>
              <TrashIcon />
              <Typography variant="body2" align="center">
                Trash
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <AppContainer />

        {state?.apps?.vsCode?.isOpen && !state?.apps?.vsCode?.isMinimized && VsCode}
      </Grid>
      {showContextMenu && <ContextMenu coordinate={coordinate} />}
    </Box>
  );
};

export default DesktopScreen;

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
import AppContainer from "../components/AppContainer";
import apps from "../config/apps";

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
  const [favApps, setFavApps] = useState({});

  const [obj, setObj] = useState({
    minimizedWindows: {},
    focusedWindows: {}
  });

  console.log(apps);

  const [showContextMenu, setContextMenu] = useState(false);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const classes = useStyles();

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

  const hasMinimized = (objId) => {
    const { minimizedWindows, focusedWindows } = obj;
    minimizedWindows[objId] = true;
    focusedWindows[objId] = false;
    actions.setAppState({ minimizedWindows, focusedWindows });
    // focus();
  };

  // const focus = () => {
  //   if (isAllMinimized()) {
  //     for (const index in )
  //   }
  // };

  const isAllMinimized = () => {};

  useEffect(() => {
    loadApps();
    checkNewFolders();
  }, []);

  const loadApps = () => {
    let focusedWindows = {},
      closedWindows = {},
      favouriteApps = {},
      minimizedWindows = {};
    const desktopApps = [];
    apps.forEach((app) => {
      focusedWindows = {
        ...focusedWindows,
        [app.id]: false
      };
      closedWindows = {
        ...closedWindows,
        [app.id]: true
      };
      favouriteApps = {
        ...favouriteApps,
        [app.id]: app.favourite
      };
      minimizedWindows = {
        ...minimizedWindows,
        [app.id]: false
      };
      if (app.desktopShortcut) desktopApps.push(app.id);
    });
    actions.setAppState({
      focusedWindows,
      closedWindows,
      favouriteApps,
      minimizedWindows,
      desktopApps
    });
    setFavApps({ ...favouriteApps });
  };

  const checkNewFolders = () => {
    let newFolders = localStorage.getItem("newFolders");
    if (newFolders === null && newFolders !== undefined) {
      localStorage.setItem("newFolders", JSON.stringify([]));
    } else {
      newFolders = JSON.parse(newFolders);
      newFolders.forEach((folder) => {
        apps.push({
          id: `new-folder-${folder.id}`,
          title: folder.name,
          icon: "./themes/Yaru/system/folder.png",
          favourite: false,
          desktopShortcut: true,
          screen: () => {}
        });
      });
      updateAppsData();
    }
  };

  const updateAppsData = () => {
    let focusedWindows = {},
      closedWindows = {},
      favouriteApps = {},
      minimizedWindows = {},
      disabledApps = {};
    let desktopApps = [];
    apps.forEach((app) => {
      focusedWindows = {
        ...focusedWindows,
        [app.id]:
          focusedWindows[app.id] !== undefined || focusedWindows[app.id] !== null
            ? focusedWindows[app.id]
            : false
      };
      minimizedWindows = {
        ...minimizedWindows,
        [app.id]:
          minimizedWindows[app.id] !== undefined || minimizedWindows[app.id] !== null
            ? minimizedWindows[app.id]
            : false
      };
      disabledApps = {
        ...disabledApps,
        [app.id]: app.disabled
      };
      closedWindows = {
        ...closedWindows,
        [app.id]:
          closedWindows[app.id] !== undefined || closedWindows[app.id] !== null
            ? closedWindows[app.id]
            : true
      };
      favouriteApps = {
        ...favouriteApps,
        [app.id]: app.favourite
      };
      if (app.desktop_shortcut) desktopApps.push(app.id);
    });
    actions.setAppState({
      focusedWindows,
      closedWindows,
      disabledApps,
      minimizedWindows,
      favouriteApps,
      desktopApps
    });
    setFavApps({ ...favouriteApps });
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
            {state.apps.map(
              (app, i) =>
                app.isDesktopShortcut && (
                  <Grid key={i} item className={classes.app}>
                    {app.icon}
                    <Typography variant="body2" align="center">
                      {app.title}
                    </Typography>
                  </Grid>
                )
            )}
          </Grid>
        </Grid>
        {/* <AppContainer /> */}
        {/* <div
          style={{ position: "absolute", height: "100%", width: "100%" }}
          data-context="desktop-area"
        >
          {apps.map((app, i) => (
            <AppContainer
              key={i}
              id={app.id}
              tittle={app.title}
              screen={app.screen}
              hasMinimized={hasMinimized}
              minimized={obj.minimizedWindows[app.id]}
            />
          ))}
        </div> */}
      </Grid>
      {showContextMenu && <ContextMenu coordinate={coordinate} />}
    </Box>
  );
};

export default DesktopScreen;

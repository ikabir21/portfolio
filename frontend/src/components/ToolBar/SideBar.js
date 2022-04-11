import React, { useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import makeStyles from "@mui/styles/makeStyles";

import { AppsIcon, VsCodeIcon, SpotifyIcon } from "../../assets/svg/apps";
import DotIcon from "../../assets/svg/DotIcon";
import { AppContext } from "../../context";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: theme.spacing(8),
    height: "100%",
    background: "#151515"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(0.5)
  },
  listItem: {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(2.2),
    marginBottom: theme.spacing(0.5),
    "&:hover": {
      background: "#26282c"
    }
  }
}));

const SideBar = () => {
  const { state, actions } = useContext(AppContext);
  const classes = useStyles();

  const handleClick = (e, appName) => {
    const _isMinimized = state?.apps?.[appName]?.isMinimized || false;
    console.log(appName, state?.apps?.[appName]?.isMinimized);
    actions.setAppOpen({
      appName,
      isOpen: true,
      isMaximized: state?.apps?.appName?.isMaximized || false,
      isMinimized: !_isMinimized
    });
  };

  return (
    <Box className={classes.root} display="flex" justifyContent="center">
      <List className={classes.list}>
        <ListItem
          disablePadding
          sx={{ background: state?.apps?.vsCode?.isOpen && "#26282c" }}
          className={classes.listItem}
        >
          {state?.apps?.vsCode?.isOpen && <DotIcon />}
          <VsCodeIcon onClick={(e) => handleClick(e, "vsCode")} sx={{ transform: "scale(1.8)" }} />
        </ListItem>
        <ListItem disablePadding className={classes.listItem}>
          {state?.apps?.spotify?.isOpen && <DotIcon />}
          <SpotifyIcon sx={{ transform: "scale(1.8)" }} />
        </ListItem>
        <div style={{ flexGrow: 1 }} />
        <ListItem disablePadding className={classes.listItem}>
          <AppsIcon sx={{ transform: "scale(1.8)" }} />
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;

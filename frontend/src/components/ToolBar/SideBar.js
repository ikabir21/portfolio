/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import makeStyles from "@mui/styles/makeStyles";

import { AppsIcon } from "../../assets/svg/apps";
import DotIcon from "../../assets/svg/DotIcon";
import { AppContext } from "../../context";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: theme.spacing(8),
    height: "100%",
    background: "#151515",
    zIndex: 40
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
    },
    "& > svg": {
      transform: "scale(1.8)"
    }
  }
}));

const SideBar = (props) => {
  const { state, actions } = useContext(AppContext);
  const classes = useStyles();

  const showSideBar = () => props.hideSideBar(null, false);
  const hideSideBar = () =>
    setTimeout(() => {
      props.hideSideBar(null, true);
    }, 2000);

  // console.log(state.appState.closedWindows);

  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        width: "auto",
        zIndex: 40,
        left: 0,
        top: 0,
        backgroundColor: "#151515",
        padding: ".3ch",
        transform: props.isSideBarHidden && "translateX(-100%)",
        transitionDuration: ".3s"
      }}
      id="sidebar"
    >
      {state.apps.map(
        (app, i) =>
          app.isFavourite && (
            <ListItem
              onClick={() => props.openApp(app.id)}
              key={i}
              disablePadding
              className={classes.listItem}
              id={"sidebar-" + app.id}
            >
              {state.appState.closedWindows?.[app.id] !== undefined &&
                !state.appState.closedWindows?.[app.id] && <DotIcon />}
              {app.icon}
            </ListItem>
          )
      )}
      <div style={{ flexGrow: 1 }} />
      <ListItem disablePadding className={classes.listItem}>
        <AppsIcon sx={{ transform: "scale(1.8)" }} />
      </ListItem>
    </Box>
  );
};

export default SideBar;

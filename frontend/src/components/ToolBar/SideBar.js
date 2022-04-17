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
    },
    "& > svg": {
      transform: "scale(1.8)"
    }
  }
}));

const SideBar = (props) => {
  const { state, actions } = useContext(AppContext);
  const classes = useStyles();

  // console.log(state.appState.closedWindows);

  return (
    <Box className={classes.root} display="flex" justifyContent="center">
      <List className={classes.list}>
        {state.apps.map(
          (app, i) =>
            app.isFavourite && (
              <ListItem
                onClick={() => props.openApp(app.id)}
                key={i}
                disablePadding
                className={classes.listItem}
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
      </List>
    </Box>
  );
};

export default SideBar;

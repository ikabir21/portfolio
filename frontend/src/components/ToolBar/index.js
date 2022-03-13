import React, { useState, useEffect } from "react";

// @mui/material imports

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

// @mui/lab imports

import CalendarPicker from "@mui/lab/CalendarPicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

// @mui/styles imports

import makeStyles from "@mui/styles/makeStyles";
import withStyles from "@mui/styles/withStyles";

// project imports

import { getCurrentTime } from "../../utils/time";

// assets
import Stack from "@mui/material/Stack";
import ArrowDownIcon from "../../assets/svg/ArrowDownIcon";
import BatteryIcon from "../../assets/svg/BatteryIcon";
import SpeakerIcon from "../../assets/svg/SpeakerIcon";
import BlueToothIcon from "../../assets/svg/BlueToothIcon";
import WifiIcon from "../../assets/svg/WifiIcon";
import NightModeIcon from "../../assets/svg/NightModeIcon";
import UpIcon from "../../assets/svg/UpIcon";
import { Container } from "@mui/material";

const useStyles = makeStyles({
  toolBar: {
    minHeight: "100% !important",
    justifyContent: "space-between",
    cursor: "default",
    paddingTop: "0.5ch"
  },
  list: {
    padding: "0 1ch",
    borderBottom: "2px solid #E95420"
  },
  up: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "90%"
  },
  textField: {
    borderRadius: "4px",
    "& input": {
      fontSize: "14px",
      p: "1ch",
      maxWidth: "180px",
      color: "#333"
    },
    "& fieldset": {
      border: "2px solid #E95420 !important"
    },

    "& .MuiOutlinedInput-root": {
      background: "#eee",
      pr: "0.5ch"
    },
    "& .MuiFormHelperText-root": {
      color: "#eee",
      position: "absolute",
      bottom: "-25px",
      left: "-10px"
    }
  }
});

const NotificationAndCalendar = withStyles({
  root: {
    position: "absolute !important",
    left: "50%",

    transform: "translateX(-50%)",
    borderRadius: "4px",
    boxShadow: "0",
    background: "#eee",
    "& .PrivatePickersSlideTransition-root": {
      minHeight: "200px"
    }
  }
})((props) => {
  const { classes, date, setDate } = props;
  console.log(props);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CalendarPicker
        className={classes.root}
        date={date}
        onChange={(newDate) => setDate(newDate)}
      />
    </LocalizationProvider>
  );
});

const ToolBar = () => {
  const [date, setDate] = useState(new Date());
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const classes = useStyles();

  const NotificationAndCalendarMenu = (
    <Menu
      id="notification-menu"
      anchorEl={anchorEl1}
      keepMounted
      open={Boolean(anchorEl1)}
      onClose={() => setAnchorEl1(null)}
      variant="selectedMenu"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      sx={{ marginTop: "1.5ch" }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 780,
          maxWidth: "100%",
          minHeight: 320,
          p: 0,
          "& .MuiList-root": {
            padding: 0
          }
        }}
      >
        <Stack direction="row">
          <Container sx={{ flex: 0.6 }}>
            <Stack>
              <Card sx={{ p: 1 }}>Not1</Card>
            </Stack>
          </Container>
          <Divider sx={{ height: "320px" }} orientation="vertical" />
          <Container sx={{ flex: 0.4 }}>
            <Typography variant="body1">Sunday</Typography>
            <Typography variant="h5">March 13 2022</Typography>
          </Container>
        </Stack>
      </Paper>
    </Menu>
  );

  const RightMenu = (
    <Menu
      id="menu-popular-card"
      anchorEl={anchorEl2}
      keepMounted
      open={Boolean(anchorEl2)}
      onClose={() => setAnchorEl2(null)}
      variant="selectedMenu"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      sx={{ marginTop: "1.5ch" }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 300,
          maxWidth: "100%",
          p: 0,
          "& .MuiList-root": {
            padding: 0
          }
        }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <WifiIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘X
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <WifiIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘C
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <WifiIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Paste</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘V
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <WifiIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Web Clipboard</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </Menu>
  );

  return (
    <AppBar elevation={0} sx={{ maxHeight: "3ch", backgroundColor: "#4F194D" }} position="absolute">
      <Toolbar variant="dense" className={classes.toolBar} disableGutters>
        <Typography variant="body1" className={classes.list}>
          Activities
        </Typography>

        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <UpIcon
            sx={{
              opacity: anchorEl1 ? 1 : 0,
              transition: "opacity 260ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
            }}
            className={classes.up}
          />
          <Typography
            aria-controls="notification-menu"
            aria-haspopup="true"
            variant="body1"
            onClick={(e) => setAnchorEl1(e.currentTarget)}
            className={classes.list}
          >
            {getCurrentTime(date)}
          </Typography>
        </div>

        {NotificationAndCalendarMenu}

        <Stack
          aria-controls="menu-popular-card"
          aria-haspopup="true"
          onClick={(e) => setAnchorEl2(e.currentTarget)}
          direction="row"
          alignItems="center"
          className={classes.list}
          spacing={0.5}
          sx={{ position: "relative" }}
        >
          <NightModeIcon fontSize="small" />
          <WifiIcon fontSize="small" />
          <BlueToothIcon fontSize="small" />
          <SpeakerIcon fontSize="small" />
          <Stack direction="row" alignItems="center">
            <BatteryIcon fontSize="small" />
            <Typography align="center" variant="caption">
              100%
            </Typography>
          </Stack>
          <ArrowDownIcon />
          <UpIcon
            sx={{
              opacity: anchorEl2 ? 1 : 0,
              transition: "opacity 260ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
            }}
            className={classes.up}
          />
        </Stack>
        {RightMenu}
      </Toolbar>
    </AppBar>
  );
};

export default ToolBar;

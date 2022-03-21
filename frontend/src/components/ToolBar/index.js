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
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// @mui/styles imports

import makeStyles from "@mui/styles/makeStyles";
import styled from "@mui/styles/styled";

import moment from "moment";

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
import Calendar from "./Calendar";
import PropTypes from "prop-types";

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

const CustomSwitch = styled(Switch)(() => ({
  height: "auto !important",
  paddingTop: "0 !important",
  paddingBottom: "0 !important",
  marginLeft: "-5px !important",
  "& .MuiSwitch-switchBase": {
    "&:hover": { backgroundColor: "transparent !important" },
    padding: 0,
    left: 12.5,
    top: 1,
    "&.Mui-checked": {
      transform: "translateX(20px)"
    }
  },
  "& .MuiSwitch-thumb": {
    width: 16,
    height: 16,
    backgroundColor: "#fff !important"
  },
  "& .MuiSwitch-track": {
    height: 17.5,
    minWidth: 37,
    borderRadius: 12,
    backgroundColor: "#CECAC5",
    opacity: "0.8 !important"
  }
}));

const ToolBar = ({ color = "#4F194D" }) => {
  const [date, setDate] = useState(moment().format("ddd MMM DD HH:mm:ss"));
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const interval = setInterval(() => setDate(moment().format("ddd MMM DD HH:mm:ss")), 1000);

    return () => clearInterval(interval);
  }, []);

  const curMonth = moment().format("MMMM");
  const curDate = moment().format("DD");
  const curDay = moment().format("dddd");
  const curYear = moment().format("YYYY");

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
      sx={{
        marginTop: "1.5ch",
        "& ul": {
          padding: "12px 0 !important",
          border: "1px solid #cdcdcd",
          boxShadow:
            "0px 2px 1px -1px rgba(255, 255, 255, 0.2),0px 1px 1px 0px rgba(255, 255, 255, 0.14),0px 1px 3px 0px rgba(255, 255, 255, 0.12)"
        }
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 770,
          maxWidth: "100%",
          minHeight: 360,
          p: 0,
          "& .MuiList-root": {
            padding: 0
          }
        }}
      >
        <Stack direction="row">
          <Stack flex={0.62} px={3.1} pt={1}>
            <Stack flex={1}>
              <Card sx={{ p: 1 }}>Not1</Card>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center">
                <Typography sx={{ letterSpacing: "-0.3px" }} variant="body1">
                  Do Not Disturb
                </Typography>
                <CustomSwitch color="secondary" disableRipple />
              </Stack>
              <Button
                disableRipple
                sx={{ color: "#333", border: "1px solid #CECAC5", padding: "4px 18px" }}
              >
                <Typography sx={{ lineHeight: 1, color: "#444" }} variant="body1">
                  Clear
                </Typography>
              </Button>
            </Stack>
          </Stack>
          <Divider sx={{ height: "360px" }} orientation="vertical" />
          <Stack flex={0.38} px={1.5} pt={1}>
            <Typography variant="subtitle1" style={{ lineHeight: 1 }}>
              {curDay}
            </Typography>
            <Typography variant="h5" mb={2.5}>
              {curMonth} {curDate} {curYear}
            </Typography>
            <Calendar />
          </Stack>
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
    <AppBar elevation={0} sx={{ maxHeight: "3ch", backgroundColor: color }} position="absolute">
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
            {date}
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

ToolBar.propTypes = {
  color: PropTypes.string
};

export default ToolBar;

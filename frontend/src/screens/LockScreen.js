import React, { useState, useEffect } from "react";

// @mui/material imports

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UserIcon from "../assets/svg/UserIcon";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
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

// @mui/styles imports

import makeStyles from "@mui/styles/makeStyles";
import withStyles from "@mui/styles/withStyles";

// project imports

import { getCurrentTime } from "../utils/time";

import Logo from "../assets/svg/Logo";
import BackIcon from "../assets/svg/BackIcon";
import EyeOffIcon from "../assets/svg/EyeOffIcon";
import EyeOnIcon from "../assets/svg/EyeOnIcon";
import PropTypes from "prop-types";
import Spinner from "../assets/svg/Spinner";
import NextIcon from "../assets/svg/NextIcon";
import ArrowDownIcon from "../assets/svg/ArrowDownIcon";
import BatteryIcon from "../assets/svg/BatteryIcon";
import SpeakerIcon from "../assets/svg/SpeakerIcon";
import BlueToothIcon from "../assets/svg/BlueToothIcon";
import WifiIcon from "../assets/svg/WifiIcon";
import NightModeIcon from "../assets/svg/NightModeIcon";
import UpIcon from "../assets/svg/UpIcon";

// JSS for LockScreen

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

// Custom User component

const CutsomUser = withStyles({
  btn: {
    cursor: "default !important",
    width: "250px",
    textTransform: "inherit",
    justifyContent: "start !important",
    color: "inherit !important",
    align: "left",
    padding: "0.5ch 1ch",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.04) !important"
    }
  },
  user: {
    width: "48px !important",
    height: "48px !important",
    backgroundColor: "rgba(255, 255, 255, 0.05) !important"
  }
})((props) => {
  const { children, classes } = props;
  return (
    <Button
      {...props}
      className={classes.btn}
      startIcon={
        <Avatar className={classes.user}>
          <UserIcon />
        </Avatar>
      }
    >
      {children}
    </Button>
  );
});

// Login UI

const Login = ({ isSaved, setIsSaved, showLogin, setShowLogin }) => {
  const [isPassword, setIsPassword] = useState(true);
  const [password, setPassword] = useState("sudo login");
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false);
        if (password === "sudo login") alert("logged in");
        else setError(true);
      }, 300);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }, [isError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(!isLoading);
  };

  return (
    <Stack spacing={1} alignItems="center">
      <Avatar sx={{ width: 72, height: 72, background: "rgba(255, 255, 255, 0.05)" }}>
        <UserIcon sx={{ width: "48px", height: "48px" }} />
      </Avatar>
      <Typography>{isSaved && "Ichan Kabir"}</Typography>
      <Stack alignItems="center" spacing={1} direction="row">
        <IconButton
          onClick={() => {
            setShowLogin(!showLogin);
            setIsSaved(true);
          }}
          sx={{
            background: "#eee",
            p: 0.3,
            "&:hover": { background: "#eee" }
          }}
          size="small"
        >
          <BackIcon sx={{ fontSize: "1.4rem" }} />
        </IconButton>
        <form onSubmit={handleSubmit}>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            className={classes.textField}
            placeholder="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setIsPassword(!isPassword)} size="small">
                    {isPassword ? (
                      <EyeOffIcon sx={{ fontSize: "18px" }} />
                    ) : (
                      <EyeOnIcon sx={{ fontSize: "18px" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
            type={isPassword ? "password" : "text"}
            helperText={isError && "Sorry, that didn't work. Please try again."}
          />
        </form>
        {isLoading ? (
          <IconButton disableRipple sx={{ backgroundColor: "#4F194D", marginLeft: "4px" }}>
            <Spinner sx={{ fontSize: "1rem", color: "#eee" }} />
          </IconButton>
        ) : (
          <IconButton
            type="submit"
            disableRipple
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.04)", marginLeft: "4px" }}
            onClick={() => setLoading(!isLoading)}
          >
            <NextIcon sx={{ fontSize: "1rem", color: "#eee" }} />
          </IconButton>
        )}
      </Stack>
    </Stack>
  );
};

Login.propTypes = {
  showLogin: PropTypes.bool.isRequired,
  setShowLogin: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
  setIsSaved: PropTypes.func.isRequired
};

const LockScreen = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [date, setDate] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDate(new Date());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const handleClose = () => setAnchorEl(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleShowLogin = () => setShowLogin((state) => !state);

  const ToolBar = (
    <AppBar elevation={0} sx={{ maxHeight: "3ch", backgroundColor: "#4F194D" }} position="absolute">
      <Toolbar variant="dense" className={classes.toolBar} disableGutters>
        <Typography variant="body1" className={classes.list}>
          Activities
        </Typography>
        <Typography variant="body1" className={classes.list}>
          {getCurrentTime(date)}
        </Typography>
        <Stack
          aria-controls="menu-popular-card"
          aria-haspopup="true"
          onClick={handleClick}
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
              opacity: anchorEl ? 1 : 0,
              transition: "opacity 260ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
            }}
            className={classes.up}
          />
        </Stack>
        <Menu
          id="menu-popular-card"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
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
      </Toolbar>
    </AppBar>
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
      bgcolor="#4F194D"
      color="grey.50"
      flexDirection="column"
    >
      {/* Users */}

      {ToolBar}

      <Box>
        {!showLogin ? (
          <>
            <Box mb={1} align="start">
              <CutsomUser username="Ichan Kabir" onClick={handleShowLogin} disableRipple>
                Ichan Kabir
              </CutsomUser>
            </Box>
            <Box align="start">
              <Typography
                // sx={{ cursor: "pointer" }}
                onClick={() => {
                  setShowLogin(!showLogin);
                  setIsSaved(false);
                }}
                component="p"
                align="left"
                variant="caption"
              >
                Not listed?
              </Typography>
            </Box>
          </>
        ) : (
          <Login
            isSaved={isSaved}
            setIsSaved={setIsSaved}
            showLogin={showLogin}
            setShowLogin={setShowLogin}
          />
        )}
      </Box>

      {/* Logo */}
      <Box position="absolute" bottom={0}>
        <Typography
          gutterBottom
          sx={{
            fontSize: "3rem",
            letterSpacing: "-2px",
            fontWeight: 500,
            textTransform: "lowercase"
          }}
          variant="h1"
        >
          Ichan Kabir
        </Typography>
        <div style={{ position: "absolute", top: "-10px", right: "-40px" }}>
          <Logo />
        </div>
      </Box>
    </Box>
  );
};

export default LockScreen;

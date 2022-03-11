import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import User from "../assets/svg/User";
import {
  Avatar,
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import Logo from "../assets/svg/Logo";
import Back from "../assets/svg/Back";
import EyeOff from "../assets/svg/EyeOff";
import EyeOn from "../assets/svg/EyeOn";
import PropTypes from "prop-types";
import Spinner from "../assets/svg/Spinner";
import Next from "../assets/svg/Next";

const Login = ({ isSaved, setIsSaved, showLogin, setShowLogin }) => {
  const [isPassword, setIsPassword] = useState(true);
  const [password, setPassword] = useState("sudo login");
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

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
      <Avatar sx={{ width: 72, height: 72, backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
        <User sx={{ width: "48px", height: "48px" }} />
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
          <Back sx={{ fontSize: "1.4rem" }} />
        </IconButton>
        <form onSubmit={handleSubmit}>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            sx={{
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
            }}
            placeholder="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setIsPassword(!isPassword)} size="small">
                    {isPassword ? (
                      <EyeOff sx={{ fontSize: "18px" }} />
                    ) : (
                      <EyeOn sx={{ fontSize: "18px" }} />
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
            <Next sx={{ fontSize: "1rem", color: "#eee" }} />
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

  const handleShowLogin = () => setShowLogin((state) => !state);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
      bgcolor="#4F194D"
      color="grey.50"
      flexDirection="column"
    >
      {/* Users */}

      <Box>
        {!showLogin ? (
          <>
            <Box align="start">
              <Button
                onClick={handleShowLogin}
                disableRipple
                startIcon={
                  <Avatar
                    sx={{ width: 48, height: 48, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <User />
                  </Avatar>
                }
                sx={{
                  width: "250px",
                  textTransform: "inherit",
                  justifyContent: "start",
                  color: "inherit",
                  align: "left",
                  padding: "0.5ch 1ch",
                  marginBottom: "1ch",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.04)"
                  }
                }}
              >
                Ichan Kabir
              </Button>
            </Box>
            <Box align="start">
              <Typography
                sx={{ cursor: "pointer" }}
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

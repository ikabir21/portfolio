import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import User from "../assets/svg/User";
import { Avatar, Typography } from "@mui/material";
import Logo from "../assets/svg/Logo";

const LockScreen = () => {
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
      <Box>
        <Box align="start">
          <Button
            disableRipple
            startIcon={
              <Avatar sx={{ width: 48, height: 48, backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
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
            onClick={() => alert("hi")}
            component="p"
            align="left"
            variant="caption"
          >
            Not listed?
          </Typography>
        </Box>
      </Box>
      <Box position="absolute" bottom={0}>
        <Typography
          gutterBottom
          sx={{
            fontSize: "3rem",
            letterSpacing: "-2px",
            fontWeight: 600,
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

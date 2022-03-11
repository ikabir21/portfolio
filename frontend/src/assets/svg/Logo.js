import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { SvgIcon } from "@mui/material";

const useStyles = makeStyles({
  wrapper: {
    width: "40px",
    height: "40px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "open-sans",
    "& svg": {
      width: "40px",
      height: "auto",
      display: "block",
      position: "absolute"
    },
    "& path": {
      fill: "none",
      strokeWidth: "15px",
      stroke: "#eee"
    },
    "& h2": {
      color: "#eee",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      margin: "0 auto",
      fontSize: "20px"
    }
  }
});

const Logo = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <SvgIcon {...props} viewBox="0 0 200 180">
        <path d="M11.4 90.3q-1.4-2.4 0-4.7l42.3-73.3q1.3-2.3 4-2.3h84.6q2.7 0 4 2.3l42.4 73.3q1.3 2.3 0 4.7l-42.3 73.2q-1.4 2.4-4.1 2.4H57.7q-2.7 0-4-2.4z" />
      </SvgIcon>
      <h2>I</h2>
    </div>
  );
};

export default Logo;

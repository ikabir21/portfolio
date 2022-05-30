import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import makeStyles from "@mui/styles/makeStyles";
import RefreshIcon from "../../assets/svg/RefreshIcon";
import HomeIcon from "../../assets/svg/HomeIcon";
import LeftIcon from "../../assets/svg/LeftIcon";
import RightIcon from "../../assets/svg/RightIcon";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "3.5ch",
    height: "3.6ch",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5ch",
    marginLeft: "0.5ch",
    "&:hover": {
      backgroundColor: "#666"
    }
  },
  urlInput: {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    color: "#eee",
    borderRadius: "9999px",
    padding: "0.125rem 0.75rem",
    flexGrow: 1,
    lineHeight: "inherit",
    border: "none",
    backgroundColor: "#111111",
    cursor: "text",
    marginLeft: "0.75ch",
    marginRight: "3ch",
    "&:focus": {
      color: "#fff"
    }
  }
}));

const Firefox = () => {
  const [url, setUrl] = useState("https://www.google.com/webhp?igu=1");
  const [displayUrl, setDisplayUrl] = useState("https://www.google.com");

  const classes = useStyles();

  //   useEffect(() => {
  //     // let lastVisi
  //   }, []);
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(51, 51, 51, 1)"
      }}
    >
      <Box
        sx={{
          width: "100%",
          paddingTop: "0.5ch",
          paddingBottom: "0.5ch",
          display: "flex",
          justifyContent: "start",
          alignItems: "center"
        }}
        className="text-white text-sm border-b border-gray-900"
      >
        <div onClick={() => {}} className={classes.icon}>
          <LeftIcon />
        </div>
        <div onClick={() => {}} className={classes.icon}>
          <RightIcon />
        </div>
        <div onClick={() => {}} className={classes.icon}>
          <RefreshIcon />
        </div>
        <div onClick={() => {}} className={classes.icon}>
          <HomeIcon />
        </div>
        <input
          className={classes.urlInput}
          onKeyDown={() => {}}
          onChange={() => {}}
          value={displayUrl}
          id="firefox-url-bar"
          type="url"
          spellCheck={false}
          autoComplete="off"
        />
      </Box>
      <iframe
        style={{ flexGrow: 1 }}
        src={url}
        id="firefox-screen"
        frameBorder="0"
        title="Ubuntu Firefox"
      ></iframe>
    </Box>
  );
};

export default Firefox;

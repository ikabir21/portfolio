/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";

import { Rnd } from "react-rnd";
import Draggable from "react-draggable";
import { AppContext } from "../context";
import NextIcon from "../assets/svg/NextIcon";
import BackIcon from "../assets/svg/BackIcon";
import MinimizeIcon from "../assets/svg/MinimizeIcon";
import MaximizeIcon1 from "../assets/svg/MaximizeIcon1";
import MaximizeIcon2 from "../assets/svg/MaximizeIcon2";
import CloseIcon from "../assets/svg/CloseIcon";

const WindowEditButtons = (props) => {
  return (
    <Box
      backgroundColor="#111"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ cursor: props?.isDrag ? "grabbing !important" : "default" }}
    >
      <div />
      <Typography>{props.title || "APP TITLE HERE"}</Typography>
      <div>
        <span onClick={props.minimize}>
          <MinimizeIcon />
        </span>
        {props.isMaximised ? (
          <span onClick={props.maximize}>
            <MaximizeIcon1 />
          </span>
        ) : (
          <span onClick={props.maximize}>
            <MaximizeIcon2 />
          </span>
        )}
        <button tabIndex="-1" id={`close-${props.id}`} onClick={props.close}>
          <CloseIcon />
        </button>
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  rnd: {
    left: `${theme.spacing(8)} !important`,
    top: `${theme.spacing(3)} !important`,
    position: "absolute",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f0f0f0",
    border: "none",
    borderRadius: "5px 5px 0 0"
  }
}));

const AppContainer = (props) => {
  const { state, actions } = useContext(AppContext);
  const classes = useStyles();

  console.log(props);

  const [appState, setAppState] = useState({
    startX: 60,
    startY: 10,
    isDrag: false,
    cursorTypeMove: false,
    width: 60,
    height: 85,
    closed: false,
    maximized: false,
    parentSize: {
      height: 100,
      width: 100
    }
  });

  const restoreWindow = () => {
    var r = document.querySelector("#" + props.id);
    setDefaultWindowDimenstion();
    // get previous position
    let posx = r.style.getPropertyValue("--window-transform-x");
    let posy = r.style.getPropertyValue("--window-transform-y");

    r.style.transform = `translate(${posx},${posy})`;
    setTimeout(() => {
      setAppState({ maximized: false });
      checkOverlap();
    }, 300);
  };

  const setDefaultWindowDimenstion = () => {
    if (window.innerWidth < 640) {
      setAppState({ height: 60, width: 85 }, resizeBoundries);
    } else {
      setAppState({ height: 85, width: 60 }, resizeBoundries);
    }
  };

  const checkOverlap = () => {
    var r = document.querySelector("#" + props.id);
    var rect = r.getBoundingClientRect();
    if (rect.x.toFixed(1) < 50) {
      // if this window overlapps with SideBar
      props.hideSideBar(props.id, true);
    } else {
      props.hideSideBar(props.id, false);
    }
  };

  const resizeBoundries = () => {
    setAppState({
      parentSize: {
        height:
          window.innerHeight - //parent height
          window.innerHeight * (appState.height / 100.0) - // this window's height
          28, // some padding
        width:
          window.innerWidth - // parent width
          window.innerWidth * (appState.width / 100.0) //this window's width
      }
    });
  };

  const maximizeWindow = () => {
    if (appState.maximized) {
      restoreWindow();
    } else {
      focusWindow();
      var r = document.querySelector("#" + props.id);
      setWinowsPosition();
      // translate window to maximize position
      r.style.transform = `translate(-1pt,-2pt)`;
      setAppState({ maximized: true, height: 96.3, width: 100.2 });
      props.hideSideBar(props.id, true);
    }
  };

  const minimizeWindow = () => {
    alert("hi");
    // let posx = -310;
    // if (appState.maximized) {
    //   posx = -510;
    // }
    setWinowsPosition();
    // get corrosponding sidebar app's position
    // var r = document.querySelector("#sidebar-" + props.id);
    // var sidebBarApp = r.getBoundingClientRect();

    // const r = document.querySelector("#" + props.id);
    // translate window to that position
    // r.style.transform = `translate(${posx}px,${sidebBarApp.y.toFixed(1) - 240}px) scale(0.2)`;
    props.hasMinimized(props.id);
  };

  const closeWindow = () => {
    setWinowsPosition();
    setAppState({ closed: true }, () => {
      props.hideSideBar(props.id, false);
      setTimeout(() => {
        props.closed(props.id);
      }, 300); // after 300ms this window will be unmounted from parent (Desktop)
    });
  };

  const setWinowsPosition = () => {
    var r = document.querySelector("#" + props.id);
    var rect = r.getBoundingClientRect();
    r.style.setProperty("--window-transform-x", rect.x.toFixed(1).toString() + "px");
    r.style.setProperty("--window-transform-y", (rect.y.toFixed(1) - 32).toString() + "px");
  };

  const focusWindow = () => {
    props.focus(props.id);
  };

  const handleDrag = (e, d) => {
    const { startX, startY } = appState;
    setAppState((state) => ({ ...state, startX: startX + d.x, startY: startY + d.y }));
  };

  const handleStart = () => setAppState((state) => ({ ...state, isDrag: true }));

  const handleEnd = () => setAppState((state) => ({ ...state, isDrag: false }));

  return (
    <Draggable
      axis="both"
      // handle=".handle"
      grid={[1, 1]}
      scale={1}
      // // onStart={changeCursorToMove}
      // // onStop={changeCursorToDefault}
      // // onDrag={checkOverlap}
      onDrag={handleDrag}
      onStart={handleStart}
      onStop={handleEnd}
      // onMouseDown={eventControl}
      // onMouseUp={eventControl}
      // onTouchStart={eventControl}
      // onTouchEnd={eventControl}
      // allowAnyClick={false}
      // defaultPosition={{ x: appState.startX, y: appState.startY }}
      // bounds={{
      //   left: 0,
      //   top: 0,
      //   right: appState.parentSize.width,
      //   bottom: appState.parentSize.height
      // }}
    >
      <div
        style={{
          width: `${appState.width}%`,
          height: `${appState.height}%`,
          backgroundColor: "#333"
        }}
        draggable={false}
        className={appState.closed && "closed-window"}
        id={props.id}
      >
        {/* <WindowYBorder resize={handleHorizontalResize} />
        <WindowXBorder resize={handleVerticleResize} />*/}
        <WindowEditButtons
          minimize={minimizeWindow}
          maximize={maximizeWindow}
          isMaximised={appState.maximized}
          close={closeWindow}
          id={props.id}
          isDrag={appState.isDrag}
        />
        {/* {props.id === "settings" ? (
          <Settings
            changeBackgroundImage={props.changeBackgroundImage}
            currBgImgName={props.bg_image_name}
          />
        ) : (
          <WindowMainScreen
            screen={props.screen}
            title={props.title}
            addFolder={props.id === "terminal" ? props.addFolder : null}
            openApp={props.openApp}
          />
        )} */}
      </div>
    </Draggable>
  );
};

export default AppContainer;

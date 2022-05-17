/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import Draggable from "react-draggable";
import { AppContext } from "../context";
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
        <span onClick={props.minimizeWindow}>
          <MinimizeIcon />
        </span>
        <span onClick={props.maximizeWindow}>
          {props.isMaximised ? <MaximizeIcon1 /> : <MaximizeIcon2 />}
        </span>
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
  const [obj, setObj] = useState({
    x: 60,
    y: 10,
    isDrag: false,
    width: 60,
    height: 85,
    closed: false,
    maximized: false,
    parentSize: {
      height: 100,
      width: 100
    }
  });

  useEffect(() => {
    setDefaultWindowDimenstion();
    window.addEventListener("resize", resizeBoundries);
  }, []);

  const restoreWindow = () => {
    var r = document.querySelector("#" + props.id);
    setDefaultWindowDimenstion();
    // get previous position
    let posx = r.style.getPropertyValue("--window-transform-x");
    let posy = r.style.getPropertyValue("--window-transform-y");

    r.style.transform = `translate(${posx},${posy})`;
    setTimeout(() => {
      setObj({ maximized: false });
      // checkOverlap();
    }, 300);
  };

  const setDefaultWindowDimenstion = () => {
    if (window.innerWidth < 640) {
      setObj({ height: 60, width: 85 });
      resizeBoundries();
    } else {
      setObj({ height: 85, width: 60 });
      resizeBoundries();
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
    setObj({
      parentSize: {
        height: window.innerHeight - window.innerHeight * (obj.height / 100.0),
        width: window.innerWidth - window.innerWidth * (obj.width / 100.0) - 65
      }
    });
  };

  const maximizeWindow = () => {
    if (obj.maximized) {
      restoreWindow();
    } else {
      props.focusWindow(props.id);
      var r = document.querySelector("#" + props.id);
      setWinowsPosition();
      // translate window to maximize position
      r.style.transform = `translate(-1pt,-2pt)`;
      setObj({ maximized: true, height: 96.3, width: 100.2 });
    }
  };

  const minimizeWindow = () => {
    alert("hi");
    setWinowsPosition();
    props.hasMinimized(props.id);
  };

  const closeWindow = () => {
    setWinowsPosition();
    setObj({ closed: true }, () => {
      setTimeout(() => {
        props.closedWindow(props.id);
      }, 300);
    });
  };

  const setWinowsPosition = () => {
    var r = document.querySelector("#" + props.id);
    var rect = r.getBoundingClientRect();
    r.style.setProperty("--window-transform-x", rect.x.toFixed(1).toString() + "px");
    r.style.setProperty("--window-transform-y", (rect.y.toFixed(1) - 32).toString() + "px");
  };

  // const handleDrag = (e, d) => {
  //   const { x, y } = appState;
  //   setAppState((state) => ({ ...state, x: x + d.x, y: y + d.y }));
  // };

  const handleStart = () => setObj((state) => ({ ...state, isDrag: true }));

  const handleStop = () => setObj((state) => ({ ...state, isDrag: false }));

  return (
    <Draggable
      axis="both"
      grid={[1, 1]}
      scale={1}
      // onDrag={checkOverlap}
      onStart={handleStart}
      onStop={handleStop}
      allowAnyClick={false}
      defaultPosition={{ x: obj.x, y: obj.y }}
      bounds={{
        left: 0,
        top: 0,
        right: obj.parentSize.width,
        bottom: obj.parentSize.height
      }}
      // onMouseDown={eventControl}
      // onMouseUp={eventControl}
      // onTouchStart={eventControl}
      // onTouchEnd={eventControl}
      // style={{ position: "absolute", zIndex: 30 }}
    >
      <div
        style={{
          width: `${obj.width}%`,
          height: `${obj.height}%`,
          backgroundColor: "#333",
          position: "absolute",
          zIndex: 30
        }}
        id={props.id}
      >
        {/* <WindowYBorder resize={handleHorizontalResize} />
        <WindowXBorder resize={handleVerticleResize} />*/}
        <WindowEditButtons
          minimizeWindow={minimizeWindow}
          maximizeWindow={maximizeWindow}
          isMaximised={obj.maximized}
          closeWindow={closeWindow}
          id={props.id}
          isDrag={obj.isDrag}
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

import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  menu: {
    position: "absolute",
    background: "#2b2b2b",
    color: "#eee",
    display: "inline-block",
    borderRadius: "4px",
    left: (coordinate) => `${coordinate.x}px`,
    top: (coordinate) => `${coordinate.y}px`,
    "& > li": {
      padding: "5px 20px",
      fontSize: "14px",
      "&:first-child": {
        marginTop: "10px"
      },
      "&:last-child": {
        marginBottom: "10px"
      },
      "&:hover": {
        background: "#555"
      }
    }
  }
}));

const ContextMenu = ({ coordinate }) => {
  console.log(coordinate);
  const classes = useStyles(coordinate);

  return (
    <ul className={classes.menu}>
      <li>New Folder</li>
      <li>Paste</li>
      <li>Show Desktop in Files</li>
      <li>Open in Terminal</li>
      <li>Change Background</li>
    </ul>
  );
};

ContextMenu.propTypes = {
  coordinate: PropTypes.object.isRequired
};

export default ContextMenu;

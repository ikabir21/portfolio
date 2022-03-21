import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

export const TrashIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path
        d="M6 2v1H2v1h1v10h10V4h1V3h-4V2H6zm1 1h2v1h3v9H4V4h3V3zM6 6v5h1V6H6zm3 0v5h1V6H9z"
        fill="currentColor"
        color="#4d4d4d"
      />
    </SvgIcon>
  );
};

export const HomeIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 48 48" width="64" height="64">
    <linearGradient
      id="a"
      x1="0"
      y1=".5"
      x2="1"
      y2=".5"
      gradientTransform="matrix(46.1 0 0 37.1 .95 9.95)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0%" stopColor="#00ffa9" />
      <stop offset="100%" stopColor="#f074b3" />
    </linearGradient>
    <path
      d="M9 23.05a1.05 1.05 0 110-2.1h5.65c.552 0 1.358-.269 1.8-.6l6.4-4.8c.442-.331 1.248-.6 1.8-.6h19.4c1.656 0 3 1.344 3 3v26.1c0 1.656-1.344 3-3 3H3.95c-1.656 0-3-1.344-3-3V33a1.05 1.05 0 112.1 0v10.45a1.5 1.5 0 001.5 1.5h38.9a1.5 1.5 0 001.5-1.5v-24.9a1.5 1.5 0 00-1.5-1.5h-18.1c-.552 0-1.358.269-1.8.6l-6.4 4.8c-.442.331-1.248.6-1.8.6H9zM3.05 25a1.05 1.05 0 11-2.1 0V12.95c0-1.656 1.344-3 3-3h12.48c.552 0 1.317.317 1.707.707l2.603 2.603a1.048 1.048 0 010 1.48 1.048 1.048 0 01-1.48 0l-2.69-2.69H4.55a1.5 1.5 0 00-1.5 1.5V25zm34.49 9.09h-.76V40h-2.66v-4.43h-4.9V40h-2.6v-5.91h-1.09l6.13-5.75 5.88 5.75zm-12.92 2h-4.15l11.21-10.52 10.78 10.52h-3.68V42h-6.66v-4.43h-.9V42h-6.6v-5.91z"
      fillRule="evenodd"
      fill="url(#a)"
    />
  </SvgIcon>
);

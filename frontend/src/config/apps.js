import { HomeIcon, SpotifyIcon, TrashIcon, VsCodeIcon } from "../assets/svg/apps";
import displayVsCode from "../components/apps/vscode";
import displaySpotify from "../components/apps/spotify";

const apps = [
  {
    id: "ikabir",
    title: "ikabir",
    icon: <HomeIcon />,
    isDisabled: false,
    isFavourite: false,
    isDesktopShortcut: true,
    screen: displayVsCode
  },
  {
    id: "vscode",
    title: "Code",
    icon: <VsCodeIcon />,
    isDisabled: false,
    isFavourite: true,
    isDesktopShortcut: true,
    screen: displayVsCode
  },
  {
    id: "spotify",
    title: "Spotify",
    icon: <SpotifyIcon />,
    isDisabled: false,
    isFavourite: true,
    isDesktopShortcut: true,
    screen: displaySpotify
  },
  {
    id: "trash",
    title: "Trash",
    icon: <TrashIcon />,
    isDisabled: false,
    isFavourite: false,
    isDesktopShortcut: true,
    screen: displaySpotify
  }
  // {
  //   id: "ikabir",
  //   title: "ikabir",
  //   icon: <HomeIcon />,
  //   isDisabled: false,
  //   isFavourite: false,
  //   isDesktopShortcut: true,
  //   screen: displayVsCode
  // },
  // {
  //   id: "vscode",
  //   title: "Code",
  //   icon: <VsCodeIcon />,
  //   isDisabled: false,
  //   isFavourite: true,
  //   isDesktopShortcut: true,
  //   screen: displayVsCode
  // },
  // {
  //   id: "spotify",
  //   title: "Spotify",
  //   icon: <SpotifyIcon />,
  //   isDisabled: false,
  //   isFavourite: true,
  //   isDesktopShortcut: true,
  //   screen: displaySpotify
  // },
  // {
  //   id: "trash",
  //   title: "Trash",
  //   icon: <TrashIcon />,
  //   isDisabled: false,
  //   isFavourite: false,
  //   isDesktopShortcut: true,
  //   screen: displaySpotify
  // },
  // {
  //   id: "vscode",
  //   title: "Code",
  //   icon: <VsCodeIcon />,
  //   isDisabled: false,
  //   isFavourite: true,
  //   isDesktopShortcut: true,
  //   screen: displayVsCode
  // },
  // {
  //   id: "spotify",
  //   title: "Spotify",
  //   icon: <SpotifyIcon />,
  //   isDisabled: false,
  //   isFavourite: true,
  //   isDesktopShortcut: true,
  //   screen: displaySpotify
  // },
  // {
  //   id: "trash",
  //   title: "Trash",
  //   icon: <TrashIcon />,
  //   isDisabled: false,
  //   isFavourite: false,
  //   isDesktopShortcut: true,
  //   screen: displaySpotify
  // },
  // {
  //   id: "spotify",
  //   title: "Spotify",
  //   icon: <SpotifyIcon />,
  //   isDisabled: false,
  //   isFavourite: true,
  //   isDesktopShortcut: true,
  //   screen: displaySpotify
  // },
  // {
  //   id: "trash",
  //   title: "Trash",
  //   icon: <TrashIcon />,
  //   isDisabled: false,
  //   isFavourite: false,
  //   isDesktopShortcut: true,
  //   screen: displaySpotify
  // }
];

export default apps;

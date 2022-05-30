import { HomeIcon, SpotifyIcon, TrashIcon, VsCodeIcon } from "../assets/svg/apps";
import FirefoxIcon from "../assets/svg/FirefoxIcon";
import VsCode from "../components/apps/VsCode";
import displaySpotify from "../components/apps/spotify";
import Firefox from "../components/apps/Firefox";

const apps = [
  {
    id: "firefox",
    title: "Firefox",
    icon: <FirefoxIcon />,
    isDisabled: false,
    isFavourite: true,
    isDesktopShortcut: true,
    screen: <Firefox />
  },
  {
    id: "ikabir",
    title: "ikabir",
    icon: <HomeIcon />,
    isDisabled: false,
    isFavourite: false,
    isDesktopShortcut: true,
    screen: <VsCode />
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: <VsCodeIcon />,
    isDisabled: false,
    isFavourite: true,
    isDesktopShortcut: true,
    screen: <VsCode />
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

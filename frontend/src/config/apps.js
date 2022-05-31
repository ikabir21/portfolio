import { HomeIcon, SpotifyIcon, TrashIcon, VsCodeIcon } from "../assets/svg/apps";
import FirefoxIcon from "../assets/svg/FirefoxIcon";
import TerminalIcon from "../assets/svg/TerminalIcon";
import PostmanIcon from "../assets/svg/PostmanIcon";
import DiscordIcon from "../assets/svg/DiscordIcon";
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
    isDesktopShortcut: false,
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
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: <TerminalIcon />,
    isDisabled: false,
    isFavourite: true,
    isDesktopShortcut: false,
    screen: <VsCode />
  },
  {
    id: "postman",
    title: "Postman",
    icon: <PostmanIcon />,
    isDisabled: false,
    isFavourite: true,
    isDesktopShortcut: false,
    screen: displaySpotify
  },
  {
    id: "discord",
    title: "Discord",
    icon: <DiscordIcon />,
    isDisabled: false,
    isFavourite: true,
    isDesktopShortcut: false,
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

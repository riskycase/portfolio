import { Project, MenuItem, ContactDetails } from "@/types";
import linkscapeImage from "@/../public/linkscape.png";
import mqttMockImage from "@/../public/mqtt-mock.png";
import broadcastemImage from "@/../public/broadcastem.png";
import remoteLedImage from "@/../public/remote_led.png";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export const menus: MenuItem[] = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Resume",
    link: "https://resume.riskycase.in",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const projects: Project[] = [
  {
    name: "Auto Campnet",
    description:
      "Desktop application developed using the Tauri framework in Rustlang. Allows automated login in laptops to on campus wifi for all 4000+ students of BITS Goa Campus",
    link: "https://github.com/Devsoc-BPGC/auto-campnet",
  },
  {
    name: "Linkscape",
    description:
      "ReactJS based web application which allows any authenticated user to add quick links about any academic courses. Used by 12K+ students in all BITS campuses.",
    link: "https://linkscape.riskycase.in/",
    image: linkscapeImage,
  },
  {
    name: "MQTT Mock",
    description:
      "WebSocket server implemented in NodeJS which aims to demonstrate the concept of topic based publisher-subscriber communication model.",
    link: "https://mqtt-mock.riskycase.in/",
    image: mqttMockImage,
  },
  {
    name: "Remote LED Server",
    description:
      "IOT bridge which allows controlling RGB lights with 44 key IR remote via a raspberry pi, from anywhere in the world! Uses LIRC and Websockets, and is secured by TOTP implementation to ensure only owner have access.",
    link: "https://github.com/riskycase/remote-led-server/",
    image: remoteLedImage,
  },
  {
    name: "Broadcast 'em",
    description:
      "Node.js library which uses file system APIs, streaming and Express.js server to serve local files as sharable HTTP/S downloads.",
    link: "https://github.com/riskycase/broadcastem-core",
    image: broadcastemImage,
  },
];

export const contactDetails: ContactDetails[] = [
  {
    name: "riskycase",
    link: "https://github.com/riskycase",
    icon: FaGithub,
  },
  {
    name: "riskycase",
    link: "https://github.com/riskycase",
    icon: FaLinkedin,
  },
  {
    name: "hrishikeshpatil.754@gmail.com",
    link: "mailto:hrishikeshpatil.754@gmail.com",
    icon: MdAlternateEmail,
  },
  {
    name: "+91 94484 78823",
    link: "tel:+91 9448478823",
    icon: FaPhone,
  },
];

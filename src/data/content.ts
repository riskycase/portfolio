import { Project, MenuItem, ContactDetails, ExperienceDetails } from "@/types";
import autoCampnetImage from "@/../public/autoCampnetImage.webp";
import linkscapeImage from "@/../public/linkscape.webp";
import mqttMockImage from "@/../public/mqtt-mock.webp";
import broadcastemImage from "@/../public/broadcastem.webp";
import remoteLedImage from "@/../public/remote_led.webp";
import linkShortenerImage from "@/../public/link-shortener.webp";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export const menus: MenuItem[] = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "Resume",
    link: "https://resume.riskycase.in",
  },
];

export const experiences: ExperienceDetails[] = [
  {
    comapany: "Amazon.com Inc",
    title: "Software Development Engineer",
    start: new Date(2024, 9),
    location: "Bangalore, KA",
    description:
      "SDE-I in AWS Data Center Power Management",
    points: [
    ],
  },
  {
    comapany: "Amazon.com Inc",
    title: "Software Development Engineer Intern",
    start: new Date(2023, 6),
    end: new Date(2023, 11),
    location: "Bangalore, KA",
    description:
      "Added refund ARN information to transactions screen in AU region for customers to track refund status directly with the bank.",
    points: [
      "Estimated to reduce 30K customer support tickets in AU/SG region and approximately 4.7MN customer support tickets globally.",
      "Used Java and Groovy in backend and Scala for frontend.",
    ],
  },
  {
    comapany: "Shalaka Connected Devices LLP ",
    title: "Summer Intern",
    start: new Date(2022, 5),
    end: new Date(2022, 6),
    location: "Pune, MH",
    description:
      "Used python plugin for VLC media player to make digital screen controller.",
    points: [
      "Potentially deployed to 100 factory floors with about 350 screens.",
      "Used Python on Raspberry Pi and HiveMQ MQTT server to control VLC instance which is broadcasted to digital display.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Link Shortener",
    description:
      "In house link shortener built to support short links under riskycase.in domain, with Google login support",
    link: "https://short.riskycase.in",
    image: linkShortenerImage,
  },
  {
    name: "Auto Campnet",
    description:
      "Desktop application developed using the Tauri framework in Rustlang. Allows automated login in laptops to on campus wifi for all 4000+ students of BITS Goa Campus",
    link: "https://github.com/Devsoc-BPGC/auto-campnet",
    image: autoCampnetImage,
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
    link: "https://www.linkedin.com/in/riskycase/",
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

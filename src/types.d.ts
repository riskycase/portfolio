import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

interface MenuItem {
  name: string;
  link: string;
}

interface Project {
  name: string;
  description: string;
  link?: string;
  image?: StaticImageData;
}

interface ContactDetails {
  name: string;
  link: string;
  icon: IconType;
}

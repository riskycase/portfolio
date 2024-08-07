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

interface ExperienceDetails {
  comapany: string;
  title: string;
  start: Date;
  end: Date;
  location: string;
  description: string;
  points: string[];
}

interface Link {
  shortCode: string;
  longLink: string;
}

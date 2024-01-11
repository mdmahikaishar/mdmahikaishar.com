import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  BiAward,
  BiBook,
  BiBriefcaseAlt,
  BiBriefcaseAlt2,
  BiHomeAlt,
  BiMessageSquareDetail,
  BiSupport,
  BiUser,
  BiMailSend,
} from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";

export const NAV_LINKS = [
  { Icon: BiHomeAlt, href: "#home" },
  { Icon: BiUser, href: "#about" },
  { Icon: BiBook, href: "#service" },
  { Icon: BiBriefcaseAlt2, href: "#work" },
  { Icon: BiMessageSquareDetail, href: "#contact" },
];

export const HOME_SOCIALS = [
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mahikaishar",
  },
  {
    Icon: FaGithub,
    href: "https://www.github.com/mdmahikaishar",
  },
  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/mahikaishar.bro",
  },
];

export const ABOUT_DESCRIBTION =
  "I'm a passionate FullStack Developer. Also a MERN Stack Web Developer. I've been coding for a wheel. I've done lots of project.";
export const ABOUT_CARDS = [
  { Icon: BiAward, name: "Experience", time: "3 years" },
  {
    Icon: BiBriefcaseAlt,
    name: "Completed",
    time: "48+ Projects",
  },
  { Icon: BiSupport, name: "Support", time: "Online" },
];

export const EXPERIENCE_CARDS = [
  {
    id: "experience00",
    name: "Frontend Developer",
    abilities: [
      { id: "ability00", name: "HTML", short: "" },
      { id: "ability01", name: "TypeScript", short: "" },
      { id: "ability02", name: "NextJs", short: "" },
      { id: "ability03", name: "ReactNative", short: "" },
      { id: "ability04", name: "SCSS", short: "" },
      { id: "ability05", name: "TailwindCss", short: "" },
    ],
  },
  {
    id: "experience01",
    name: "Backend Developer",
    abilities: [
      { id: "ability00", name: "ExpressJs", short: "" },
      { id: "ability01", name: "Fastify", short: "" },
      { id: "ability02", name: "Danjgo", short: "" },
      { id: "ability03", name: "Falsk", short: "" },
      { id: "ability04", name: "MySQL", short: "" },
      { id: "ability05", name: "Mongodb", short: "" },
    ],
  },
  {
    id: "experience02",
    name: "IT Programming",
    abilities: [
      { id: "ability00", name: "Sklearn", short: "" },
      { id: "ability01", name: "PyQt", short: "" },
      { id: "ability02", name: "PyGame", short: "" },
      { id: "ability03", name: "WinForms", short: "" },
      { id: "ability04", name: "", short: "" },
      { id: "ability05", name: "", short: "" },
    ],
  },
  {
    id: "experience03",
    name: "Development",
    abilities: [
      { id: "ability00", name: "Git", short: "" },
      { id: "ability01", name: "Docker", short: "" }
    ],
  },
];

export const SERVICE_CARDS = [
  { id: "service00", name: "IT Programming", href: "" },
  { id: "service01", name: "Frontend Developing", href: "" },
  { id: "service02", name: "Backend Developing", href: "" },
];
export const SERVICE_DETAILS = [
  {
    id: "detail00",
    serviceId: "service00",
    describtion:
      "Service with more than 3 years of experience. Providing quality work to clients and companies.",
    abilities: [
      "I develop the user interface.",
      "Web page development.",
      "I create ux element interactions.",
      "I position your company brand.",
      "Design and mockups of products for companies.",
    ],
  },
  {
    id: "detail01",
    serviceId: "service01",
    describtion:
      "Service with more than 3 years of experience. Providing quality work to clients and companies.",
    abilities: [
      "I develop the user interface.",
      "Web page development.",
      "I create ux element interactions.",
      "I position your company brand.",
      "Design and mockups of products for companies.",
    ],
  },
  {
    id: "detail02",
    serviceId: "service02",
    describtion:
      "Service with more than 3 years of experience. Providing quality work to clients and companies.",
    abilities: [
      "I develop the user interface.",
      "Web page development.",
      "I create ux element interactions.",
      "I position your company brand.",
      "Design and mockups of products for companies.",
    ],
  },
];

export const TESTIMONIAL_CARDS = [
  {
    id: "0",
    img: "/images/testimonial1.png",
    name: "Semo doe",
    describtion:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    id: "1",
    img: "/images/testimonial2.png",
    name: "Semo doe",
    describtion:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    id: "2",
    img: "/images/testimonial3.png",
    name: "Semo doe",
    describtion:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
];

export const WORK_TABS = ["All", "Web", "Mobile", "Desktop"];
export const WORK_CARDS = [
  {
    id: "00",
    name: "App Movii",
    img: "/images/work1.jpg",
    href: "/",
    tag: ["Web"],
  },
  {
    id: "01",
    name: "App Movii",
    img: "/images/work2.jpg",
    href: "/",
    tag: ["Web", "Desktop"],
  },
  {
    id: "02",
    name: "App Movii",
    img: "/images/work3.jpg",
    href: "/",
    tag: ["Web", "Mobile"],
  },
  {
    id: "03",
    name: "App Movii",
    img: "/images/work4.jpg",
    href: "/",
    tag: ["Mobile", "Desktop"],
  },
  {
    id: "04",
    name: "App Movii",
    img: "/images/work5.jpg",
    href: "/",
    tag: ["Mobile", "Desktop"],
  },
];

export const CONTACT_TALKS = [
  {
    Icon: BiMailSend,
    name: "Email",
    short: "mdmahikaishar",
    href: "mailto:mahikaishar@gmail.com",
  },
  {
    Icon: FaWhatsapp,
    name: "Whatsapp",
    short: "+880-14003-14120",
    href: "https://api.whatsapp.com/send?phone=8801400314120&text=Hello, Let's do something together!",
  },
  {
    Icon: BsMessenger,
    name: "Messanger",
    short: "mdmahikaishar",
    href: "https://m.me/mahikaishar.bro",
  },
];

export const FOOTER_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#work" },
  { name: "Testimonial", href: "#testimonial" },
];
export const FOOTER_SOCIALS = [
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mahikaishar",
  },
  {
    Icon: FaGithub,
    href: "https://www.github.com/mdmahikaishar",
  },
  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/mahikaishar.bro",
  },
];

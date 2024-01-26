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
  { icon: BiHomeAlt, href: "#home" },
  { icon: BiUser, href: "#about" },
  { icon: BiBook, href: "#service" },
  { icon: BiBriefcaseAlt2, href: "#work" },
  { icon: BiMessageSquareDetail, href: "#contact" },
];

export const SOCIAL_LINKS = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mahikaishar",
  },
  {
    icon: FaGithub,
    href: "https://www.github.com/mdmahikaishar",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/mdmahikaishar.bro",
  },
];

export const ABOUT_DESCRIBTION = "I'm a dedicated and passionate programmer with a love ❤ for turning ideas into functional reality. My journey in the world of programming began 5 years ago, and since then, I've been on an exciting quest to continuously learn and grow in this ever-evolving field.";
//"I'm a passionate FullStack Developer. Also a MERN Stack Web Developer. I've been coding for a wheel. I've done lots of project.";
export const ABOUT_CARDS = [
  { icon: BiAward, name: "Working", time: "3 years" },
  { icon: BiBriefcaseAlt, name: "Completed", time: "48+ Projects", },
  { icon: BiSupport, name: "Support", time: "Online" },
];

export const EXPERIENCE_CARDS = [
  {
    id: "00",
    name: "Languages",
    abilities: [
      { id: "00", name: "Rust", short: "" },
      { id: "01", name: "TypeScript", short: "" },
      { id: "02", name: "Python", short: "" },
      { id: "03", name: "CSS", short: "" },
      { id: "04", name: "HTML", short: "" },
    ],
  },
  {
    id: "01",
    name: "Frameworks",
    abilities: [
      { id: "00", name: "NextJs", short: "" },
      { id: "01", name: "Fastify", short: "" },
      { id: "02", name: "ExpressJs", short: "" },
      { id: "03", name: "Axum", short: "" },
      { id: "04", name: "Leptos", short: "" },
      { id: "05", name: "Wasm", short: "" },
    ],
  },
  {
    id: "02",
    name: "Databases",
    abilities: [
      { id: "00", name: "MongoDB", short: "" },
      { id: "01", name: "MySQL", short: "" },
      { id: "02", name: "Sqlite", short: "" },
    ],
  },
  {
    id: "03",
    name: "Tools",
    abilities: [
      { id: "00", name: "Git", short: "" },
      { id: "01", name: "Docker", short: "" },
      { id: "02", name: "WSL", short: "" },
      { id: "03", name: "Vercel", short: "" },
      { id: "04", name: "Netlify", short: "" },
    ],
  },
];


export const SERVICE_CARDS = [
  { id: "service00", name: "Full Stack Development", href: "" },
  { id: "service01", name: "Programming", href: "" },
  { id: "service02", name: "Software Development", href: "" },
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
    img: "/testimonial1.png",
    name: "Semo doe",
    describtion:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    id: "1",
    img: "/testimonial2.png",
    name: "Semo doe",
    describtion:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    id: "2",
    img: "/testimonial3.png",
    name: "Semo doe",
    describtion:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
];

export const WORK_CARDS = [
  {
    id: "00",
    name: "App Movii",
    img: "/work1.jpg",
    href: "/",
    tag: ["Web"],
  },
  {
    id: "01",
    name: "App Movii",
    img: "/work2.jpg",
    href: "/",
    tag: ["Web", "Desktop"],
  },
  {
    id: "02",
    name: "App Movii",
    img: "/work3.jpg",
    href: "/",
    tag: ["Web", "Mobile"],
  },
  {
    id: "03",
    name: "App Movii",
    img: "/work4.jpg",
    href: "/",
    tag: ["Mobile", "Desktop"],
  },
  {
    id: "04",
    name: "App Movii",
    img: "/work5.jpg",
    href: "/",
    tag: ["Mobile", "Desktop"],
  },
];
export const WORK_TABS = WORK_CARDS.reduce((acc: string[], item) => {
  item.tag.forEach(tag => acc.includes(tag) ? null : acc.push(tag));
  return acc;
}, []);

export const CONTACT_TALKS = [
  {
    icon: BiMailSend,
    name: "Email",
    short: "mdmahikaishar",
    href: "mailto:mahikaishar@gmail.com",
  },
  {
    icon: FaWhatsapp,
    name: "Whatsapp",
    short: "+880-16138-43538",
    href: "https://api.whatsapp.com/send?phone=8801400314120&text=Hello, Let's do something together!",
  },
  {
    icon: BsMessenger,
    name: "Messanger",
    short: "mdmahikaishar",
    href: "https://m.me/mahikaishar.bro",
  },
];

export const FOOTER_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#work" },
  { name: "testimonial", href: "#testimonial" },
];

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mutex Systems Pvt.Ltd - React Intern",
    location: "Karachi",
    description:
      "My first internship was with Mutext Systems, where I was hired as a React Intern. During this experience, I collaborated closely with cross-functional teams, fulfilling responsibilities related to frontend development and design.",
    // icon: React.createElement(LuGraduationCap),
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2021 - Apr 2021",
  },
  {
    title: "QBS CO | Software Engineering Intern",
    location: "Karachi",
    description:
      "During my second internship at QBS, I played a pivotal role as a React Native UI Designer. In this capacity, I was entrusted with the crucial task of conceptualizing, crafting, and refining user interface components and screens using the React Native framework..",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "DAPPOMATICS | Full Stack Developer",
    location: "Karachi",
    description:
      "As a Full Stack Developer at DAPPOMATICS, I developed integration libraries, worked on an NFT Web 3 website, contributed to a Turnkey Fuel Management System and CRM, utilized MongoDB for data management, implemented payment processing logic in Node.js, and designed RESTful APIs for seamless integration",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - Oct 2022",
  },
  {
    title: "QBS CO | Full Stack Developer",
    location: "Karachi",
    description:
      "I was actively involved in the development of an Immigration Website (https://fanuun.com), where I successfully integrated Multer for secure file uploads, implemented DDoS attack prevention measures such as rate limiting and request validation to ensure website availability, enhanced security with Google reCAPTCHA, and conducted rigorous testing including unit and end-to-end testing to maintain website reliability. ",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2022 - June 2023",
  },
  {
    title: "Jumppace | Software Engineer II",
    location: "Karachi",
    description:
      "I am currently employed as a Software Engineer Level 2 at Jumppace, where my primary responsibility involves developing the backend and frontend of dashboard/admin panels for multiple mobile applications.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Fanuun.com",
    description:
      "I worked as a full-stack developer on this project for 1 years. Visa consultation service that can meet all of your immigration needs.",
    tags: ["React", "Next.js", "MongoDB", "Node JS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Remind Why",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Bridjus Dashboard",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;

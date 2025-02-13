import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiCsharp,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  sqlserver : {
    title: "sqlserver",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/sql-server-white.svg" alt="Java"/>,
  },
  Csharp : {
    title: "Csharp",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/csharp.svg" alt="Java"/>,
  },
  shell : {
    title: "shell",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/shell.svg" alt="Java"/>,
  },
  kotlin : {
    title: "Kotlin",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/kotlin.svg" alt="Java"/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  // +
  { // 01. AI Docker file optimizer project
    id: "Hospital-management-system",
    category: "HealthTech",
    title: "Hospital Management System",
    src: "/assets/projects-screenshots/Hospital-management-system/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "/live",
    github:"",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.html, PROJECT_SKILLS.css],
      backend: [PROJECT_SKILLS.sqlserver,PROJECT_SKILLS.Csharp],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            HMS Manager is a comprehensive hospital management system built with ASP.NET, designed 
            to streamline patient records, appointment scheduling, and hospital resource management.
            It provides an intuitive interface for managing doctors, patients, and medical records 
            efficiently. With a secure database integration, the system ensures reliable and seamless 
            hospital operations.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/Hospital-management-system/1.png`,
              `${BASE_PATH}/Hospital-management-system/2.png`,
              `${BASE_PATH}/Hospital-management-system/3.png`,
              `${BASE_PATH}/Hospital-management-system/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. Bike Rental System
    id: "Bike-Rental-System",
    category: "Web Development",
    title: "Bike Rental System",
    src: "/assets/projects-screenshots/Bike-Rental-System/1.png",
    screenshots: ["/assets/projects-screenshots/Bike-Rental-System/1.png"],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.shell],
    },
    live: "/live",
    github:"",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Bike Rental Manager is a comprehensive bike rental system built with ASP.NET, designed 
          to streamline bike reservations, user management, and rental tracking. It provides an 
          intuitive interface for managing customers, rental transactions, and bike availability 
          efficiently. With secure database integration, the system ensures reliable and seamless 
          rental operations.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/Bike-Rental-System/1.png`,
              `${BASE_PATH}/Bike-Rental-System/2.png`,
              `${BASE_PATH}/Bike-Rental-System/3.png`,
              `${BASE_PATH}/Bike-Rental-System/4.png`,
              `${BASE_PATH}/Bike-Rental-System/5.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 03. Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "Portfolio",
    src: "/assets/projects-screenshots/portfolio/1.png",
    screenshots: ["assets/projects-screenshots/portfolio/1.png"],
    live: "/live",
    github:"",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.js,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          A simple 3D portfolio website where a 3D character follows the users mouse movements 
          by turning its head. Built with Three.js for rendering and GSAP for smooth animations, 
          ensuring an interactive and engaging experience.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/1.png`,
              `${BASE_PATH}/portfolio/2.png`,
              `${BASE_PATH}/portfolio/3.png`,
              `${BASE_PATH}/portfolio/4.png`,
              `${BASE_PATH}/portfolio/5.png`,
              `${BASE_PATH}/portfolio/6.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 04. Food App
    id: "Food-App",
    category: "App Development",
    title: "Food App",
    src: "/assets/projects-screenshots/Food-App/1.png",
    screenshots: ["1.png"],
    live: "/live",
    github:"",
    skills: {
      frontend: [PROJECT_SKILLS.kotlin, PROJECT_SKILLS.java],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Food App is a dynamic food delivery application built with Kotlin, designed to 
          simplify ordering, tracking, and restaurant management. It provides an intuitive 
          interface for customers to browse menus, place orders, and make secure payments. 
          With real-time order tracking and seamless integration with delivery partners, 
          the system ensures efficient and hassle-free food delivery.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/Food-App/1.png`,
              `${BASE_PATH}/Food-App/2.png`,
              `${BASE_PATH}/Food-App/3.png`,
              `${BASE_PATH}/Food-App/4.png`,
              `${BASE_PATH}/Food-App/5.png`,
              `${BASE_PATH}/Food-App/6.png`,
              `${BASE_PATH}/Food-App/7.png`,
              `${BASE_PATH}/Food-App/8.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 05. Robotic Arm
    id: "robotic-arm",
    category: "IOT",
    title: "Robotic Arm",
    src: "/assets/projects-screenshots/robotic-arm/1.jpg",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "/live",
    github:"",
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.arduino],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Robotic Arm Controller is an advanced system built with Arduino Uno, designed for 
          precise and efficient robotic arm control. It enables smooth movement and automation
          using servo motors, allowing users to perform tasks like object manipulation and
          assembly. With an intuitive interface and customizable controls, the system
          ensures seamless operation and flexibility for various applications.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/robotic-arm/1.jpg`,
              `${BASE_PATH}/robotic-arm/2.png`,
              `${BASE_PATH}/robotic-arm/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 06. Ultrasonic radar
    id: "Ultrasonic radar",
    category: "IOT",
    title: "Ultrasonic radar",
    src: "/assets/projects-screenshots/Ultrasonic-radar/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "/live",
    github:"",
    skills: {
      frontend: [PROJECT_SKILLS.cplusplus],
      backend: [PROJECT_SKILLS.arduino],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Ultrasonic Radar System is a real-time object detection and distance measurement 
          system built using an Arduino Uno and an ultrasonic sensor. It scans the 
          surroundings by rotating a servo motor and detects obstacles within a defined 
          range. The system displays a radar-like interface on a connected screen, providing 
          real-time distance and position data. With efficient coding and hardware integration, 
          it ensures accurate and reliable object detection.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/Ultrasonic-radar/1.png`,
              `${BASE_PATH}/Ultrasonic-radar/2.png`,
              `${BASE_PATH}/Ultrasonic-radar/3.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;

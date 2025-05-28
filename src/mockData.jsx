import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { FaPython, FaJava, FaCuttlefish } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const skillsNew = [
  {
    name: "ReactJs",
    img: <FaReact size={"70%"} />,
  },
  {
    name: "JavaFX",
    img: <DiJava size={"70%"} />,
  },
  {
    name: "Swing",
    img: <DiJava size={"70%"} />,
  },
  {
    name: "Javascript",
    img: <IoLogoJavascript size={"70%"} />,
  },
  {
    name: "Html",
    img: <FaHtml5 size={"70%"} />,
  },
  {
    name: "Css",
    img: <FaCss3Alt size={"70%"} />,
  },
  {
    name: "Nodejs",
    img: <FaNodeJs size={"70%"} />,
  },
  {
    name: "Express js",
    img: <SiExpress size={"70%"} />,
  },
  {
    name: "MySQL",
    img: <SiMysql size={"70%"} />,
  },
  {
    name: "Git",
    img: <SiGit size={"70%"} />,
  },
  {
    name: "Github",
    img: <FaGithub size={"70%"} />,
  },
  {
  name: "C",
  img: <FaCuttlefish size={"70%"} />, // FaCuttlefish is often used for C
},
{
  name: "Python",
  img: <FaPython size={"70%"} />,
},
{
  name: "Java",
  img: <FaJava size={"70%"} />,
},
{
  name: "C++",
  img: <SiCplusplus size={"70%"} />,
},
];
export const projectData = [
  {
    num: "01",
    title: "Simplified File System Management Simulator",
    desc: "A simplified file system simulator that replicates core file management operations in virtual memory. Supports file creation, deletion, modification, metadata handling, and memory compaction. Designed with extensible functionality to mimic real-world file system behavior.",
    img: "../Capture.png",
    isReverced: true,
    gitUrl: "https://github.com/rizu-SM/File-Management-System-Simulator",
  },
  {
    num: "02",
    title: "ProctorAssign",
    desc: "ProctorAssign is a university exam management platform that streamlines exam scheduling, proctor assignment, and timetable management. It enables automated planning, conflict checking, and the distribution of exam schedules and reports to instructors, ensuring efficient coordination between administration and faculty.",
    img: "../ProctorAssign.png",
    isReverced: false,
    gitUrl: "https://github.com/rizu-SM/gestion-exam",
  },
  {
    num: "03",
    title: "To-Do List App",
    desc: "A productivity app for managing tasks and notes, with user authentication and notifications. Includes features like task sharing, a coin-based reward system, and multi-user support..",
    img: "../to_do.png",
    isReverced: true,
    gitUrl: "https://github.com/rizu-SM/to-do-list",
  },
  {
    num: "04",
    title: "Medical Clinic Management",
    desc: "A complete Java application for managing medical clinics, including patient records, doctors, appointments, and prescriptions. Features include advanced search, multi-medication prescriptions, and organized medical history tracking",
    img: "../pharmacy.png",
    isReverced: false,
    gitUrl: "https://github.com/rizu-SM/Gestion-Cabinet-Medical",
  },
];

export const social = [
  {
    icon: <GitHubIcon fontSize="large" />,
    link: "https://github.com/rizu-SM"
  },
  {
   
    icon: <FacebookOutlinedIcon fontSize="large" />,
    link: "https://www.facebook.com/sami.hamroun.10?locale=fr_FR"
  },
  {
    icon:<InstagramIcon fontSize="large" />,
 link: "https://www.instagram.com/rizu.am/" 
  }, {
    icon: <LinkedInIcon fontSize="large" />,
  link: "https://www.linkedin.com/in/sami-abdelmalek-hamroun-5ba1992ba/"
}

]

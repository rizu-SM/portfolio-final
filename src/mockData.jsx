import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { SiWireshark, SiBurpsuite } from "react-icons/si";
import { FaPython, FaJava, FaCuttlefish } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiFlask , SiFigma } from "react-icons/si";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const skillsNew = [
  {
    name: "Burp Suite",
    img: <SiBurpsuite size={"70%"} />,
  },
  {
    name: "Wireshark",
    img: <SiWireshark size={"70%"} />,
  },
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
    name: "PostgreSQL",
    img: <SiPostgresql size={"70%"} />,
  },
  {
    name: "MongoDB",
    img: <SiMongodb size={"70%"} />,
  },
  {
    name: "Docker",
    img: <SiDocker size={"70%"} />,
  },
  {
    name: "SQLite",
    img: <SiSqlite size={"70%"} />,
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
    name: "Flask",
    img: <SiFlask size={"70%"} />,
  },
  {
    name: "Figma",
    img: <SiFigma size={"70%"} />,
  },
{
  name: "C++",
  img: <SiCplusplus size={"70%"} />,
},
{
  name: "Nmap",
  img: <FaEye size={"70%"} />,
},

];
export const projectData = [
  {
    num: "01",
    title: "Simplified File System Management Simulator",
    desc: "A simplified file system simulator that replicates core file management operations in virtual memory. Supports file creation, deletion, modification, metadata handling, and memory compaction. Designed with extensible functionality to mimic real-world file system behavior.",
    img: "Capture.png",
    isReverced: true,
    gitUrl: "https://github.com/rizu-SM/File-Management-System-Simulator",
  },
  {
    num: "02",
    title: "Web Application Firewall WAF",
    desc: "PyWAF — A lightweight Python Web Application Firewall that detects and blocks common attacks like SQLi and XSS, with rate limiting, IP management, and a Flask dashboard for real-time monitoring.",
    img: "waf.jpg",
    isReverced: true,
    gitUrl: "https://github.com/rizu-SM/WAF",
  },
  {
    num: "03",
    title: "HoneyTrap",
    desc: "A multi-protocol Python honeypot that captures SSH, HTTP, FTP, and Telnet attack attempts. It includes a realistic fake Linux shell, GeoIP enrichment, SQLite storage, a live Flask dashboard with attack maps, REST API endpoints, Docker deployment, and Discord alerts.",
    img: "honeytrap.png",
    isReverced: true,
    gitUrl: "https://github.com/rizu-SM/honeypot",
  },
  {
    num: "04",
    title: "Cryptographie",
    desc: "A cryptography learning suite with a Flask backend and React + Vite frontend. It demonstrates classical ciphers, symmetric encryption, asymmetric algorithms, digital signatures, secret sharing, key exchange, and hashing through an interactive web interface.",
    img: "crypto.png",
    isReverced: true,
    gitUrl: "https://github.com/rizu-SM/Cryptographie",
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

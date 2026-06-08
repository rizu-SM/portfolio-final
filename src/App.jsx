import "./App.scss";
import SideBar from "./components/sidebar/SideBar";
import About from "./section/about/About";
import Contact from "./section/contact/Contact";
import Hero from "./section/hero/Hero";
import Project from "./section/project/Project";
import Skills from "./section/skills/Skills";
import Cursor from "./components/cursor/Cursor";
import Logo from "./components/Logo";
import LanguageIcon from "@mui/icons-material/Language";

function App() {
  return (
    <div className="app">
      <Cursor />
      <Logo />
      <SideBar />
      <a
        className="blog-link"
        href="https://terminal-ghost-one.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LanguageIcon />
        <span>Blog</span>
      </a>
      <Hero />
      <Skills />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Porfolio Page",
    description:
      "This page you're looking at - built with HTML and CSS in weeks 1 and 2.",
    techStack: ["HTML", "CSS"],
    url: "https://github.com/jivvyjams/portfolio-assignment/tree/week-4#",
  },
  {
    id: 2,
    title: "Desktop Environment",
    description:
      "Custom configured Linux desktop environment utilizing a minimal tiling window manager.",
    techStack: ["Arch Linux", "SwayWM", "Foot", "Dunst", "Cliphist", "Neovim"],
  },
  {
    id: 3,
    title: "YAPD Original Soundtrack",
    description:
      "Soundtrack I composed for an open-source, roguelike mobile game.",
    techStack: ["FL Studio", "Native Instruments", "Audacity"],
    url: "https://soundcloud.com/jivvyjams/sets/yapd-soundtrack",
  },
];

function App() {
  return (
    <main className="site-grid">
      <Header />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

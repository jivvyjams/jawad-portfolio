// import { useState } from "react";
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
    techStack: ["HTML", "CSS", "TypeScript", "React"],
    url: "https://github.com/jivvyjams/portfolio-assignment/tree/week-4#",
  },
  {
    id: 2,
    title: "Check Mate",
    description: "Simple task manager submitted for HYF core program project.",
    techStack: ["HTML", "CSS", "JavaScript", "SQL"],
    url: "https://github.com/HackYourFutureProjects/c55-core-project-group-2",
  },
  {
    id: 3,
    title: "Desktop Environment",
    description:
      "Custom configured Linux desktop environment utilizing a minimal tiling window manager.",
    techStack: ["Arch Linux", "SwayWM", "Foot", "Dunst", "Cliphist", "Neovim"],
  },
  {
    id: 4,
    title: "YAPD Original Soundtrack",
    description:
      "Soundtrack I composed for an open-source, roguelike mobile game.",
    techStack: ["FL Studio", "Native Instruments", "Audacity"],
    url: "https://soundcloud.com/jivvyjams/sets/yapd-soundtrack",
  },
];

export default function App() {
  // const [filter, setFilter] = useState<string | null>(null);

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

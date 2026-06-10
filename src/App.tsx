import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-fg">
      <div className="mx-auto w-11/12 max-w-6xl py-6 sm:py-10">
        <Navigation />
        <main className="flex flex-col gap-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <footer className="mt-8 border-t-2 border-alt pt-4 text-center text-xs">
          &copy; {new Date().getFullYear()} HackYourFuture assignment week 4
        </footer>
      </div>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { SectionError } from "./components/SectionError";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-fg">
      <div className="mx-auto w-11/12 max-w-6xl py-6 sm:py-10">
        <Navigation />
        <main className="flex flex-col gap-8">
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary FallbackComponent={SectionError}>
                  <HomePage />
                </ErrorBoundary>
              }
            />
            <Route
              path="/projects"
              element={
                <ErrorBoundary FallbackComponent={SectionError}>
                  <ProjectsPage />
                </ErrorBoundary>
              }
            />
            <Route
              path="/contact"
              element={
                <ErrorBoundary FallbackComponent={SectionError}>
                  <ContactPage />
                </ErrorBoundary>
              }
            />
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

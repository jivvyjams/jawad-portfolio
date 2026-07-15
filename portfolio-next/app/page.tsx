import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home — Jawad Al Bdiwi",
};

export default function HomePage() {
  return (
    <>
      <header className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <img
          className="h-32 w-32 shrink-0 rounded-full border-4 border-alt object-scale-down"
          src="/cool.png"
          alt="grinning smiley face with sunglasses giving thumbs up"
        />
        <div>
          <h1 className="text-4xl font-extrabold text-brand sm:text-5xl">
            Jawad Al Bdiwi
          </h1>
          <p className="mt-2 text-lg font-medium text-fg/80">
            Hello and welcome to my portfolio page!
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="text-2xl font-bold sm:text-3xl">About Me</h2>
          <p className="mt-3 leading-relaxed">
            I am an aspriring full-stack developer, currently enrolled in the
            Hack Your Future program.
          </p>
          <p className="mt-3 leading-relaxed">
            Before that, I was working as a project coordinator at an
            inburgering school.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <aside
            className="rounded-2xl border-2 border-alt bg-fg p-6 text-bg shadow-card"
            aria-label="interests"
          >
            <h3 className="text-xl font-bold">Interests:</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Running</li>
              <li>Music production</li>
              <li>Gaming</li>
              <li>Linux</li>
              <li>Digital privacy</li>
            </ul>
          </aside>

          <aside
            className="rounded-2xl border-2 border-alt bg-fg p-6 text-bg shadow-card"
            aria-label="tech"
          >
            <h3 className="text-xl font-bold">Tech Stack:</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Tailwind</li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

import Interests from "./Interests";
import TechStack from "./TechStack";

export default function About() {
  return (
    <>
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am an aspriring full-stack developer, currently enrolled in the Hack
          Your Future program.
        </p>
        <p>
          Before that, I was working as a project coordinator at an inburgering
          school.
        </p>
      </section>
      <Interests />
      <TechStack />
    </>
  );
}

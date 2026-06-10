import type { ComponentProps } from "react";
import { useNavigate } from "react-router";

type SubmitHandler = NonNullable<ComponentProps<"form">["onSubmit"]>;

const fieldClasses =
  "w-full rounded-2xl border-2 border-alt bg-bg p-3 text-fg placeholder:italic placeholder:text-alt/75 focus-visible:border-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg";

function ContactPage() {
  const navigate = useNavigate();

  const handleSubmit: SubmitHandler = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <section className="rounded-2xl border-2 border-alt bg-accent p-6 text-fg shadow-card">
      <h2 className="text-2xl font-bold sm:text-3xl">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="mb-2 block font-bold">
            Name *:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Smith"
            required
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-bold">
            E-mail *:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
            required
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block font-bold">
            Message *:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Enter your message here..."
            required
            className={`${fieldClasses} resize-y`}
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-2 cursor-pointer self-start rounded-2xl border-2 border-alt bg-bg px-6 py-3 font-bold text-fg transition hover:scale-105 hover:border-fg hover:bg-fg hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg sm:w-40"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactPage;

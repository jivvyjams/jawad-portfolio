import { useEffect, useRef, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const fieldClasses =
  "w-full rounded-2xl border-2 border-alt bg-bg p-3 text-fg placeholder:italic placeholder:text-alt/75 focus-visible:border-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg";

export default function ContactPage() {
  useDocumentTitle("Contact — Jawad Al Bdiwi");

  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
  const nameRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const { ref: nameRegisterRef, ...nameRegisterRest } = register("name", {
    required: "Name is required",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters",
    },
  });

  // Combine React Hook Form's ref with your own
  const setNameRef = (el: HTMLInputElement | null) => {
    nameRegisterRef(el); // React Hook Form needs this
    (nameRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
  };

  function onSubmit(data: ContactFormData) {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Contact form submitted:", data);
      reset();
      navigate("/");
    });
  }

  return (
    <section className="rounded-2xl border-2 border-alt bg-accent p-6 text-fg shadow-card">
      <h2 className="text-2xl font-bold sm:text-3xl">Get in Touch</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-4"
      >
        <div>
          <label htmlFor="name" className="mb-2 block font-bold">
            Name *:
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Smith"
            aria-invalid={errors.name ? "true" : "false"}
            className={`${fieldClasses} ${errors.name ? "border-red-500" : ""}`}
            ref={setNameRef}
            {...nameRegisterRest}
          />
          {errors.name && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-bold">
            E-mail *:
          </label>
          <input
            type="text"
            id="email"
            placeholder="example@domain.com"
            aria-invalid={errors.email ? "true" : "false"}
            className={`${fieldClasses} ${errors.email ? "border-red-500" : ""}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block font-bold">
            Message *:
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Enter your message here..."
            aria-invalid={errors.message ? "true" : "false"}
            className={`${fieldClasses} resize-y ${errors.message ? "border-red-500" : ""}`}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 20,
                message: "Message must be at least 20 characters",
              },
            })}
          ></textarea>
          {errors.message && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isPending || isSubmitting}
          className="mt-2 cursor-pointer self-start rounded-2xl border-2 border-alt bg-bg px-6 py-3 font-bold text-fg transition hover:scale-105 hover:border-fg hover:bg-fg hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:bg-bg disabled:hover:text-fg sm:w-40"
        >
          {isPending ? "Sending..." : "Send message"}
        </button>
        {errors.root && (
          <p role="alert" className="text-sm text-red-600">
            {errors.root.message}
          </p>
        )}
      </form>
    </section>
  );
}

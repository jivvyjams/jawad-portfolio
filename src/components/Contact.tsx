import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validateData(fields: FormData): FormErrors {
    const newErrors: FormErrors = {};

    if (!fields.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!fields.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!fields.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (fields.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const updatedData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedData);

    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  }
  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const fieldErrors = validateData(formData);
    if (fieldErrors[e.target.name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [e.target.name]: fieldErrors[e.target.name as keyof FormErrors],
      });
    }
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validateData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
    setErrors({});
    console.log(formData);
  }

  const hasErrors = Object.values(errors).some(Boolean);
  const isIncomplete = !formData.name || !formData.email || !formData.message;

  return (
    <section className="contact">
      <h2>Get in Touch</h2>
      <form id="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="name">
          <label htmlFor="name">Name *:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Smith"
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="email">
          <label htmlFor="email">E-mail *:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="example@domain.com"
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="message">
          <label htmlFor="message">Message *:</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your message here..."
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="submit-button"
          id="submit-button"
          disabled={hasErrors || isIncomplete}
          title={
            hasErrors || isIncomplete
              ? "Please fill in all required fields"
              : ""
          }
        >
          Submit
        </button>
      </form>
      {submitted && <p>Thanks for reaching out! I'll get back to you soon.</p>}
    </section>
  );
}

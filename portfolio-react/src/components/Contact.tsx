function Contact() {
  return (
    <section className="contact">
      <h2>Get in Touch</h2>
      <form id="contact-form">
        <div className="name">
          <label htmlFor="name">Name *:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Smith"
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email">E-mail *:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
            required
          />
        </div>
        <div className="message">
          <label htmlFor="message">Message *:</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Enter your message here..."
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button" id="submit-button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;

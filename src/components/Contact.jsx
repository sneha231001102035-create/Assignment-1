function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-card">
          <h3>Get In Touch</h3>

          <p>
            <strong>Email:</strong> snehapaul123@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>

          <p>
            <strong>Location:</strong> Kolkata, India
          </p>

          <p>
            <strong>GitHub:</strong> github.com/yourusername
          </p>
        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

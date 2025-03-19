const Contact = () => {
  return (
    <>
      <div className="hero-contact">
        <h1>Contact Us</h1>
        <hr></hr>
      </div>

      <div className="contact-sec">
        <p>
          Got a question? We'd love to hear from you! Reach out to us for any
          queries related to placements, internships, or recruitment.
        </p>
      </div>

      <div className="msg-box">
        <form action="https://formspree.io/f/maneqnpb" method="POST">
          <input
            type="text"
            name="username"
            placeholder="Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="Email"
            className="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Message"
            autoComplete="off"
            required
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default Contact;

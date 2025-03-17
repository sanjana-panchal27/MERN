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
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows={6}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;

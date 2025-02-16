const Contact = () => {
  return (
    <>
      <h1 className="container">Contact Us</h1>
      <p>
        Got a question? We'd love to hear from you! Reach out to us for any
        queries related to placements, internships, or recruitment.
      </p>
      <div className="msg-box">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows={5}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;

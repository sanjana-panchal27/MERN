import "./NavHome.css";
const AboutUs = () => {
  return (
    <>
      <div className="hero-abt">
        <h1>
          About Us
          <hr></hr>
        </h1>
      </div>

      <div className="abtus">
        <p className="abtus-para">
          At Rai University, we strive to bridge the gap between talented
          students and leading companies.<br></br>
          Our Placement Cell is dedicated to providing career opportunities,
          industry exposure, and skill development programs to help students
          transition seamlessly into the professional world.
        </p>
      </div>

      <h2 className="abt-h2">Our Mission</h2>
      <p>
        <li>
          To connect students with reputed organizations for internships and
          full-time job placements.
        </li>
        <li>
          To enhance employability through training, workshops, and industry
          interactions.
        </li>
        <li>
          To provide a seamless, transparent, and efficient placement process.
        </li>
      </p>

      <h2 className="abt-h2">What We Offer</h2>
      <ul>
        <li>
          For Students
          <li>
            A user-friendly platform to explore job and internship
            opportunities.
          </li>
          <li>Profile management for easy application tracking.</li>
        </li>
        <li>
          For Companies
          <li>A structured hiring process to find skilled candidates.</li>
          <li>Dedicated company profiles and job postings.</li>
          <li>
            Direct communication with potential hires through the platform.
          </li>
        </li>
      </ul>
    </>
  );
};

export default AboutUs;

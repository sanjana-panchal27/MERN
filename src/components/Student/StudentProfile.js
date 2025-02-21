import "./StudentHome.css";
const StudentProfile = () => {
  return (
    <>
      <div className="stu-container">
        <h1>Student Profile</h1>

        <div className="profile-container">
          <div className="s-form-section">
            <h2>Personal Information</h2>
            <label>
              Full Name
              <input
                type="text"
                className="name"
                placeholder="Full Name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                className="email"
                placeholder="Email"
                required
              />
            </label>

            <label>
              Phone no.
              <input
                type="text"
                className="phone"
                placeholder="Phone Number"
                required
              />
            </label>

            <label>
              Birth Date
              <input type="date" className="dob" required />
            </label>

            <label>
              Branch
              <input
                type="text"
                className="branch"
                placeholder="Branch"
                required
              />
            </label>

            <label>
              Department
              <input
                type="text"
                className="dept"
                placeholder="Department"
                required
              />
            </label>

            <label>
              Address
              <input
                type="text"
                className="address"
                placeholder="Address"
                required
              />
            </label>

            <button className="form-sec-btn">Next</button>
          </div>

          <h2>Education Information</h2>
          <input
            type="text"
            className="education"
            placeholder="Degree"
            required
          />
        </div>
      </div>
    </>
  );
};

export default StudentProfile;

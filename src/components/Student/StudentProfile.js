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
          <div className="s-education-sec">
            <h2>Education Information</h2>

            <label>
              Degree
              <input
                type="text"
                className="dept"
                placeholder="Degree"
                required
              />
            </label>

            <label>
              Board
              <input
                type="text"
                className="dept"
                placeholder=" Board"
                required
              />
            </label>

            <label>
              School Name
              <input
                type="text"
                className="dept"
                placeholder=" School Name"
                required
              />
            </label>

            <label>
              Passing Month
              <input
                type="text"
                className="dept"
                placeholder="Passing Month"
                required
              />
            </label>

            <label>
              Passing Year
              <input
                type="text"
                className="dept"
                placeholder="  Passing Year"
                required
              />
            </label>

            <label>
              Seat No.
              <input
                type="text"
                className="dept"
                placeholder="Seat No."
                required
              />
            </label>

            <label>
              Passed from State
              <input
                type="text"
                className="dept"
                placeholder="Passed from State"
                required
              />
            </label>

            <label>
              Passed from District
              <input
                type="text"
                className="dept"
                placeholder="Passed from District"
                required
              />
            </label>

            <label>
              Place of study(City/Town)
              <input
                type="text"
                className="dept"
                placeholder="Place of study"
                required
              />
            </label>

            <label>
              Medium of Instruction
              <input
                type="text"
                className="dept"
                placeholder=" Medium"
                required
              />
            </label>

            <label>
              Total Marks(overall)
              <input
                type="text"
                className="dept"
                placeholder="Total Marks"
                required
              />
            </label>

            <label>
              Obtained Marks(overall)
              <input
                type="text"
                className="dept"
                placeholder=" Obtained Marks"
                required
              />
            </label>

            <label>
              Percentage
              <input
                type="text"
                className="dept"
                placeholder="Percentage"
                required
              />
            </label>

            <p>Upload Degree Certificate</p>

            {/* resume upload */}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;

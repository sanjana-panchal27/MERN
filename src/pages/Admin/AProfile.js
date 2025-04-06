import React from "react";

const AProfile = () => {
  // Mock admin data (Replace with real API data if needed)
  const adminData = {
    name: "Admin Name",
    email: "admin@example.com",
    role: "Super Admin",
  };

  return (
    <div className="profile-container">
      <h2>Admin Profile</h2>
      <p><strong>Name:</strong> {adminData.name}</p>
      <p><strong>Email:</strong> {adminData.email}</p>
      <p><strong>Role:</strong> {adminData.role}</p>
    </div>
  );
};

export default AProfile;

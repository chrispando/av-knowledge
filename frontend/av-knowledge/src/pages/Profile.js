import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
import "./Profile.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  // Access user information from Redux state
  const { userInfo } = useSelector((state) => state.auth);

  // Pre-fill the fields with user information
  useEffect(() => {
    if (userInfo) {
      //console.log("userInfo:", userInfo); // Debugging
      setName(userInfo.displayName || ""); // Use displayName or default to ""
      setEmail(userInfo.email || "");
    }
  }, [userInfo]);

  const handleSignOut = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/sign-in");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", { name, email, password });
  };

  return (
    <div className="profile-container">
      <h1 className="profile-heading">Profile Page</h1>
      <h3 className="profile-subheading">Welcome to your profile!</h3>
      <form onSubmit={handleSubmit}>
        <div className="profile-form">
          <h4 className="profile-info-heading">User Information</h4>
          <div className="profile-form-group">
            <label className="profile-label">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className="profile-form-group">
            <label className="profile-label">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className="profile-form-group">
            <label className="profile-label">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
              />
            </label>
          </div>
          <div className="profile-form-group">
            <label className="profile-label">
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
              />
            </label>
          </div>
          <br />
          <div className="profile-button-group">
            <button type="submit" className="btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;

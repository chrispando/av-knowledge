import React, { useState } from "react";
import "./SignUp.css";
import { useRegisterMutation } from "../slices/usersApiSlice";
import UserCreated from "../components/UserCreated";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { setCredentials, setUserInfo } from "../slices/authSlice";

const SignUp = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userCreated, setUserCreated] = useState(false); // Track if user is created
  const [createdUser, setCreatedUser] = useState(null); // Store user data

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await register(formData).unwrap();
      dispatch(setCredentials({ ...res }));
      dispatch(setUserInfo({ ...res }));
      setUserCreated(true);
      setCreatedUser(res);
      navigate(redirect);
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  // Conditionally render UserCreated or the signup form
  if (userCreated && createdUser) {
    return <UserCreated user={createdUser} />;
  }

  return (
    <div className="sign-up-container">
      <h2 className="sign-up-heading">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="sign-up-form-group">
          <label className="sign-up-label">Display Name:</label>
          <input
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="sign-up-form-group">
          <label className="sign-up-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="sign-up-form-group">
          <label className="sign-up-label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="sign-up-form-group">
          <label className="sign-up-label">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      </form>
      <div className="sign-in-link">
        <p>Already have an account?</p>
        <Link to={`${redirect ? `/sign-in?redirect=${redirect}` : "/sign-in"}`}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

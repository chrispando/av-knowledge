import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err.data.message);
    }
  };

  return (
    <div className="sign-in-container">
      <h2 className="sign-in-heading">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="sign-in-form-group">
          <label htmlFor="email" className="sign-in-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="sign-in-form-group">
          <label htmlFor="password" className="sign-in-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary sign-in-button"
          disabled={isLoading}
        >
          Submit
        </button>
        {isLoading && <p>Loading...</p>}
      </form>
      <div className="sign-up-link">
        <p>Don't have an account?</p>
        <Link to={`${redirect ? `/sign-up?redirect=${redirect}` : "/sign-up"}`}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;

import React from "react";
import "./UserCreated.css";

const UserCreated = ({ user }) => {
  if (!user) {
    return <p>Loading user details...</p>; // Handle case where user is undefined
  }

  return (
    <div className="account-created-container">
      <h2 className="account-created-heading">Account Created Successfully!</h2>
      <p className="account-created-text">
        Welcome, <strong>{user.displayName}</strong>!
      </p>
      <p className="account-created-text">Email: {user.email}</p>
      <p className="account-created-text">
        Your account has been successfully created.
      </p>
    </div>
  );
};

export default UserCreated;

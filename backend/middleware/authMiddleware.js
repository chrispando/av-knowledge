import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import db from "../firebase.js"; // your Firestore db

const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userRef = db.collection("users").doc(decoded.userId);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        res.status(401);
        throw new Error("Not authorized, user not found");
      }

      const userData = userDoc.data();
      // don't attach password
      delete userData.password;

      req.user = { id: decoded.userId, ...userData };

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { protect, admin };

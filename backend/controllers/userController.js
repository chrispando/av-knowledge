import asyncHandler from "../middleware/asyncHandler.js";
import { db } from "../server.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import { FieldValue } from "firebase-admin/firestore";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const snapshot = await db
    .collection("users")
    .where("email", "==", email)
    .get();
  if (snapshot.empty) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  const userDoc = snapshot.docs[0];
  const user = userDoc.data();

  const match = await bcrypt.compare(password, user.passwordHash);
  if (match) {
    generateToken(res, userDoc.id);
    res.status(200).json({
      _id: userDoc.id,
      displayName: user.displayName,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { displayName, email, password } = req.body;

  const existingSnapshot = await db
    .collection("users")
    .where("email", "==", email)
    .get();
  if (!existingSnapshot.empty) {
    res.status(400);
    throw new Error("User already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newUser = {
    displayName,
    email,
    passwordHash,
    isAdmin: false,
    createdAt: FieldValue.serverTimestamp(),
  };

  const docRef = await db.collection("users").add(newUser);

  const token = generateToken(res, docRef.id);

  res.status(201).json({
    token,
    user: {
      _id: docRef.id,
      displayName: newUser.displayName,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    },
  });
});

// @desc    Log out user/clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const docRef = db.collection("users").doc(req.user._id);
  const doc = await docRef.get();

  if (!doc.exists) {
    res.status(404);
    throw new Error("User not found");
  }

  const user = doc.data();

  res.status(200).json({
    _id: doc.id,
    displayName: user.displayName,
    profilePicture: user.profilePicUrl || "",
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const docRef = db.collection("users").doc(req.user._id);
  const doc = await docRef.get();

  if (!doc.exists) {
    res.status(404);
    throw new Error("User not found");
  }

  const updates = {
    displayName: req.body.displayName,
    profilePicUrl: req.body.profilePicUrl,
    email: req.body.email,
  };

  if (req.body.password) {
    updates.passwordHash = await bcrypt.hash(req.body.password, 10);
  }

  await docRef.update(updates);

  const updatedDoc = await docRef.get();
  const updatedUser = updatedDoc.data();

  res.status(200).json({
    _id: docRef.id,
    displayName: updatedUser.displayName,
    profilePicture: updatedUser.profilePicUrl || "",
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
  });
});

// @desc    Get users
// @route   GET /api/users/
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const snapshot = await db.collection("users").get();
  const users = snapshot.docs.map((doc) => ({
    _id: doc.id,
    ...doc.data(),
    passwordHash: undefined, // remove password hash
  }));
  res.json(users);
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  const docRef = db.collection("users").doc(req.params.id);
  const doc = await docRef.get();

  if (!doc.exists) {
    res.status(404);
    throw new Error("User not found");
  }

  const user = doc.data();
  res.json({ _id: doc.id, ...user, passwordHash: undefined });
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  await db.collection("users").doc(req.params.id).delete();
  res.json({ message: "User deleted" });
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const docRef = db.collection("users").doc(req.params.id);
  const doc = await docRef.get();

  if (!doc.exists) {
    res.status(404);
    throw new Error("User not found");
  }

  const updates = {
    displayName: req.body.displayName,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
  };

  await docRef.update(updates);

  const updatedDoc = await docRef.get();
  const updatedUser = updatedDoc.data();

  res.json({ _id: docRef.id, ...updatedUser, passwordHash: undefined });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};

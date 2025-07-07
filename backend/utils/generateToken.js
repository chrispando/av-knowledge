import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  //Set JWT as HTTP-Only cookie

  res.cookie("jwt", token, {
    secure: true,
    httpOnly: true,
    sameSite: "None", // Allows cross-origin requests
  });
};

export default generateToken;

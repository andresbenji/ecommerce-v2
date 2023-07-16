import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
    //creates token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "4d",
      });
  
      //Set JWT as HTTP-Only cookie
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 4 * 24 * 60 * 60 * 1000, //3 days
      });
}

export default generateToken
// AuthMiddleware.js

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWTKEY;
const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, secret);
      req.userId = decoded?.id; // Attach userId to the request object
    }
    next();
  } catch (error) {
    console.error("Error in authentication middleware:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default authMiddleware;




// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();
// const secret = process.env.JWTKEY;
// const authMiddleWare = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     console.log(token)
//     if (token) {
//       const decoded = jwt.verify(token, secret);
//       console.log(decoded)
//       req.body._id = decoded?.id;
//     }
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default authMiddleWare;

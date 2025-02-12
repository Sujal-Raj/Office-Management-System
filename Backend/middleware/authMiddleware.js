import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // If token is expired
    if (decoded.exp * 1000 < Date.now()) {
        return res.status(401).json({ message: "Token expired. Please login again." });
    }

    req.user = await User.findById(decoded.id).select("-password");
    next();
} catch (error) {
    res.status(401).json({ message: "Invalid Token" });
}
};

export default authMiddleware;
import { jwtDecode } from "jwt-decode";
import mapStatusHTTP from "../util/mapStatusHttp.js";

// future implementation
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res
      .status(mapStatusHTTP("UNAUTHORIZED"))
      .json({ message: "NOT AUTHORIZED" });
  }

  const { id } = jwtDecode(token);
  req.userId = id;
  next();
};

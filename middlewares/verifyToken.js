import jwt from "jsonwebtoken";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const verifyToken = asyncHandler(async (req, res, next) => {

    const {authorization} = req.headers;

    if(!authorization) {
        return next(new ErrorResponse("No token was found", 401));
    }

    const token = authorization.split(" ")[1];

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if(!payload) {
        return next(new ErrorResponse("Invalid token", 401));
    }

    if(payload.role !== "admin") {
        return next(new ErrorResponse("Unauthorized", 401));
    }

    req.user = payload;
    next();
});

export default verifyToken;



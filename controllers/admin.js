import Admin from "../models/Admin.js";
import asynchandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createAdmin = asynchandler(async (req, res, next) => {

    const adminRouteEnabled = process.env.ENABLE_ADMIN_ROUTE === "true";

    if (!adminRouteEnabled) {
        return next(new ErrorResponse(`Admin route is disabled`, 404));
    }

    const {email, password} = req.body;

    const foundAdmin = await Admin.findOne({email});
    if (foundAdmin) {
        return next(new ErrorResponse(`Admin already exists with email: ${email}`, 400));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({email, password: hashedPassword, role: "admin"});

    res.status(201).json({ success: true, message: "Admin created successfully." });
});


export const loginAdmin = asynchandler(async (req, res, next) => {
    
    const {email, password} = req.body;

    const admin = await Admin.findOne({email});
    if (!admin) {
        return next(new ErrorResponse(`Invalid email`, 401));
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        return next(new ErrorResponse(`Invalid password`, 401));
    }

    const payload = {
        email: admin.email,
        role: admin.role,
        id: admin._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});


    res.status(200).json({ success: true, message: 'Login successful', token, admin: payload });
});

export const getAdmin = asynchandler(async (req, res, next) => {
    const {id} = req.user;

    const admin = await Admin.findById(id);
    if (!admin) {
        return next(new ErrorResponse(`Admin not found with id: ${id}`, 404));
    }

    res.status(200).json({ success: true, admin: { email: admin.email, role: admin.role, id: admin._id } });
});

export const changePassword = asynchandler(async (req, res, next) => {
    const { id } = req.user; // Extract admin ID from the token
    const { currentPassword, newPassword } = req.body;

    const admin = await Admin.findById(id);
    if (!admin) {
        return next(new ErrorResponse(`Admin not found with id: ${id}`, 404));
    }

    const isMatch = await bcrypt.compare(currentPassword, admin.password);
    if (!isMatch) {
        return next(new ErrorResponse(`Current password is incorrect`, 401));
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashedNewPassword;
    await admin.save();

    res.status(200).json({ success: true, message: 'Password changed successfully' });
});

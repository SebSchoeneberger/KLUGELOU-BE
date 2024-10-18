import mongoose from "mongoose";

const { Schema, model } = mongoose;

const AdminSchema = new Schema({
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" },
    createdAt: { type: Date, default: Date.now },
});

export default model("Admin", AdminSchema);
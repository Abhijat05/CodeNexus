import mongoose from "mongoose";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: [6, "Email must be at least 6 characters"],
    maxlength: [50, "Email must be at most 50 characters"],
  },
  password: { type: String, required: true, select: false },
});

userSchema.statics.hashPassword = async function (password) {
  return await bycrypt.hash(password, 10);
};

userSchema.methods.isValidPassword = async function (password) {
  return await bycrypt.compare(password, this.password);
};

userSchema.methods.generateJWT = function () {
  return jwt.sign({ email: this.email }, process.env.JWT_SECRET);
};

const User = mongoose.model("User", userSchema);

export default User;

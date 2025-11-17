// lib/auth.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function verifyPassword(plain, hash) {
  return bcrypt.compare(plain, hash);
}


export async function hashPassword(plain) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
}

export function signToken(user) {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES || "2h",
    }
  );
}

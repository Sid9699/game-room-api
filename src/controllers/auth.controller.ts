import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import User from "../models/user.model";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email: email,
    }).lean();
    if (user)
      return res.status(400).json({
        message: "User already exists.",
      });
    const encryptedPassword = await bcrypt.hash(password, 1);
    const createdUser = await User.create({
      email,
      password: encryptedPassword,
    });
    return res.json({
      message: "User created successfully.",
      token: generateToken({
        _id: createdUser._id,
        email: createdUser.email,
      }),
      tokenExpiry: Date.now() + 24 * 60 * 60 * 1000,
      user: {
        email,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error encountered, please try again later.",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email: email,
    }).lean();
    if (!user)
      return res.status(400).json({
        message: "User does not exists.",
      });
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      return res.json({
        message: "Logged in successfully.",
        user: {
          email: user.email,
        },
        token: generateToken({
          _id: user._id,
          email: user.email,
        }),
        tokenExpiry: Date.now() + 24 * 60 * 60 * 1000,
      });
    } else {
      return res.status(400).json({
        message: "Invalid credentials.",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error encountered, please try again later.",
    });
  }
};

const generateToken = (user: { email: string; _id: Types.ObjectId }) => {
  return jwt.sign(
    {
      user,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1d",
    }
  );
};

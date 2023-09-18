import { StatusCodes } from "http-status-codes";
import userModel from "../models/userModel.js";

export const register = async (req, res, next) => {
  res.send('register');
};

export const login = async (req, res, next) => {
  res.send('login');
};

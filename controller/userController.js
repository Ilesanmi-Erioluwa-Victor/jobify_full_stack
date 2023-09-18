import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import Job from "../models/jobModel.js";

export const getCurrentUser = async (req, res, next) => {
    res.status(StatusCodes.OK).json({
        msg : "get Current user"
    })
}

export const getApplication = async (req, res, next) => {
  res.status(StatusCodes.OK).json({
    msg: 'application stats',
  });
};

export const updateUser = async (req, res, next) => {
  res.status(StatusCodes.OK).json({
    msg: 'update user',
  });
};

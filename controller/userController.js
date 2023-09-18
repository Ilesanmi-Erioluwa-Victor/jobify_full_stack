import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import Job from "../models/jobModel.js";

export const getCurrentUser = async (req, res, next) => {
    res.status(StatusCodes.OK).json({
        msg : "get Current user"
    })
}

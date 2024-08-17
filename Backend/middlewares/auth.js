import { catchAsyncError } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddlewares.js";
import jwt from "jsonwebtoken";

export const isAdminAuthenticated = catchAsyncError(async (req, res, next) => {
  const token = req.cookies.provider;
  if (!token) {
    return next(new ErrorHandler("restaurant is not authenticated.", 400));
  }
});

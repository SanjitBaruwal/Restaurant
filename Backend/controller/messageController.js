import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import Message from "../model/message.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { name, subject, email, message } = req.body;

  if (!name || !subject || !email || !message) {
    return next(new ErrorHandler("please fill all fields...!!"));
  }

  await Message.create({ name, subject, email, message });
  res.status(200).json({
    success: true,
    message: "Message send Successfully.",
  });
});

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});

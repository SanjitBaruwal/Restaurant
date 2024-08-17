import Carousel from "../model/carousel.js";
import cloudinary from "cloudinary";
import path from "path";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import { url } from "inspector";
import exp from "constants";

const allowedFormats = ["image/png", "image/jpg", "image/jpeg"];

export const createCarouselItem = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new new ErrorHandler("Item image is required.", 400)());
  }

  const { background } = req.files;
  console.log(background);

  if (!allowedFormats.includes(background.mimetype)) {
    return next(new ErrorHandler("File format not supported", 400));
  }

  const { item, description } = req.body;

  if (!item || !description) {
    return next(new ErrorHandler("Please Fill all fields..", 400));
  }

  // upload an img to cloudinary

  const cloudinaryResponse = await cloudinary.uploader.upload(
    background.tempFilePath
  );

  if (!cloudinaryResponse) {
    console.error(
      "cloudinary Error:",
      cloudinaryResponse.error || "Unknown Error Occured."
    );
  }
  await Carousel.create({
    item,
    description,
    background: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });

  res.status(201).json({
    success: true,
    message: "Carousel for menu is Created successfully...!!",
  });
});

export const getallCarousels = catchAsyncErrors(async (req, res, next) => {
  const data = await Carousel.find();
  if (data.length == 0) {
    return next(new ErrorHandler("no carousels items are found", 404));
  }
  res.status(200).json({
    success: true,
    message: "your carousels items on menu are fetched successfully.",
    data: data,
  });
});

export const updateCarousel = catchAsyncErrors(async (req, res, next) => {
  const _id = req.params.id;
  const item = Carousel.findById({ _id });

  if (!item) {
    return next(new ErrorHandler("No item found", 404));
  }

  const updateCarousel = await Carousel.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Item Updated Successfully",
    item: updateCarousel,
  });
});

export const deleteCarousels = catchAsyncErrors(async (req, res, next) => {
  const _id = req.params.id;
  const item = await Carousel.findById({ _id });
  if (!item) {
    return next(new ErrorHandler("Items not found with thisid.", 404));
  }
  await Carousel.findByIdAndDelete({ _id });
  res.status(200).json({
    success: true,
    message: "items deleted succcessfully",
  });
});

import MenuItem from "../model/menu.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";

export const createMenuItem = catchAsyncErrors(async (req, res, next) => {
  const { category, item, description, price } = req.body;

  if (!category || !description || !item || !price) {
    return next(new ErrorHandler("Please Fill all fields..", 400));
  }

  await MenuItem.create({
    category,
    item,
    description,
    price,
  });

  res.status(201).json({
    success: true,
    message: "MenuItem is Created successfully...!!",
  });
});

export const getallMenuItems = catchAsyncErrors(async (req, res, next) => {
  const data = await MenuItem.find();
  if (data.length == 0) {
    return next(new ErrorHandler("No items Found", 404));
  }
  res.status(200).json({
    success: true,
    message: "menuItems are fetched successfully.",
    items: data,
  });
});

export const updateMenuItem = catchAsyncErrors(async (req, res, next) => {
  const _id = req.params.id;
  const item = await MenuItem.findById({ _id });

  if (!item) {
    return next(new ErrorHandler("No item found", 404));
  }

  const updatedItem = await MenuItem.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Item Updated Successfully",
    item: updatedItem,
  });
});

export const deleteItem = catchAsyncErrors(async (req, res, next) => {
  const _id = req.params.id;
  const item = await MenuItem.findById({ _id });
  if (!item) {
    return next(new ErrorHandler("Item not found with this id.", 404));
  }
  await MenuItem.findByIdAndDelete({ _id });
  res.status(200).json({
    success: true,
    message: "item deleted succcessfully",
  });
});

import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import Order from "../model/order.js";

export const createOrder = catchAsyncErrors(async (req, res, next) => {
  const { name, contact, address, item, quantity } = req.body;
  if (!name || !contact || !address || !item || !quantity) {
    return next(new ErrorHandler("Please fill all fields ...!!"));
  }

  const order = await Order.create({
    name,
    contact,
    address,
    item,
    quantity,
  });
  res.status(201).json({
    success: true,
    message: "your order has been placed successfully",
    order,
  });
});

export const getallOrders = catchAsyncErrors(async (req, res, next) => {
  const data = await Order.find();
  res.status(200).json({
    success: true,
    data: data,
  });
});

export const updateOrder = catchAsyncErrors(async (req, res, next) => {
  const _id = req.params.id;
  var myOrder = await Order.findById(_id);
  if (!myOrder) {
    return next(new ErrorHandler("no Order found", 404));
  }

  if (myOrder.status === "Accepted" || myOrder.status === "Rejected") {
    return next(
      new ErrorHandler(`Failed. Your order has already been ${myOrder.status}.`)
    );
  }

  const updatedOrder = await Order.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Order Updated Successfully",
    item: updatedOrder,
  });
});

export const cancelOrder = catchAsyncErrors(async (req, res, next) => {
  const _id = req.params.id;
  var myOrder = await Order.findById(_id);
  if (myOrder.status === "Accepted" || myOrder.status === "Rejected") {
    return next(
      new ErrorHandler(`Failed. Your order has already been ${myOrder.status}.`)
    );
  }
  if (myOrder.status === "Pending") {
    myOrder.status === "Cancelled";
    await myOrder.save();
    res.status(200).json({
      success: true,
      message: "Order has been cancelled successfully",
      order: myOrder,
    });
  } else {
    return next(new ErrorHandler("Order cannot be cancelled", 400));
  }
});

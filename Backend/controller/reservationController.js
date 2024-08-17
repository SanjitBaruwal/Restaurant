import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import Reservation from "../model/reservation.js";

export const makeReservation = catchAsyncErrors(async (req, res, next) => {
  const { time, date, name, phone, person, email } = req.body;
  if (!time || !date || !name || !phone || !person || !email) {
    return next(new ErrorHandler("Please fill all fields...!!"));
  }

  // Convert the date to a standard format for comparison
  const reservationDate = new Date(date).toDateString();

  // Check if the date is already reserved
  const isDateReserved = await Reservation.findOne({ date: reservationDate });

  if (isDateReserved) {
    return next(new ErrorHandler("The selected date is already reserved."));
  }
  const ourReservation = await Reservation.create({
    ...req.body,
    date: reservationDate, // Store the date in a standard format
  });
  res.status(201).json({
    success: true,
    message: "your reservation has been placed successfully.",
    data: ourReservation,
  });
});

export const getallReservation = catchAsyncErrors(async (req, res, next) => {
  const ourReservations = await Reservation.find();
  res.status(200).json({
    success: true,
    data: ourReservations,
  });
});

export const updateReservation = catchAsyncErrors(async (req, res, next) => {
  const _id = req.params.id;
  const reservation = await Reservation.findById(_id);

  if (!reservation) {
    return next(new ErrorHandler("Reservation not found.", 404));
  }

  if (reservation.status !== "Pending") {
    return next(
      new ErrorHandler(
        `Reservation cannot be updated as it is already ${reservation.status}.`,
        400
      )
    );
  }

  const updatedReservation = await Reservation.findByIdAndUpdate(
    _id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    message: "Reservation updated successfully.",
    data: updatedReservation,
  });
});

// Cancel a reservation if it is not approved
export const cancelReservation = catchAsyncErrors(async (req, res, next) => {
  const _id = req.params.id;
  const reservation = await Reservation.findById(_id);

  if (!reservation) {
    return next(new ErrorHandler("Reservation not found.", 404));
  }

  if (reservation.status === "Approved") {
    return next(
      new ErrorHandler("Approved reservations cannot be canceled.", 400)
    );
  }
  if (reservation.status === "Cancelled") {
    return next(new ErrorHandler("your reservation is already canceled.", 400));
  }

  await Reservation.findByIdAndDelete(_id);

  res.status(200).json({
    success: true,
    message: "Reservation canceled successfully.",
  });
});

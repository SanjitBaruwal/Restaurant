import express from "express";
import {
  cancelReservation,
  getallReservation,
  makeReservation,
  updateReservation,
} from "../controller/reservationController.js";
const router = express.Router();

router.post("/make-reservation", makeReservation);
router.get("/reserve", getallReservation);
router.put("/update-reservation/:id", updateReservation);
router.delete("/cancel-reservation/:id", cancelReservation);

export default router;

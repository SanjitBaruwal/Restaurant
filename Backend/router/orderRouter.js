import express from "express";
import {
  cancelOrder,
  createOrder,
  getallOrders,
  updateOrder,
} from "../controller/orderController.js";

const router = express.Router();

router.post("/createOrder", createOrder);
router.get("/allOrders", getallOrders);
router.put("/updateOrder/:id", updateOrder);
router.delete("/cancelOrder/:id", cancelOrder);

export default router;

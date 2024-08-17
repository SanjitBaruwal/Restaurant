import express from "express";

import {
  createMenuItem,
  deleteItem,
  getallMenuItems,
  updateMenuItem,
} from "../controller/menuCarousel.js";
const router = express.Router();
router.post("/addMenuItem", createMenuItem);
router.get("/getallMenuItems", getallMenuItems);
router.put("/updateMenuItem/:id", updateMenuItem);
router.delete("/deleteMenuItem/:id", deleteItem);
export default router;

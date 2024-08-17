import express from "express";
import {
  createCarouselItem,
  deleteCarousels,
  getallCarousels,
  updateCarousel,
} from "../controller/carouselController.js";
const router = express.Router();
router.post("/addCarousel", createCarouselItem);
router.get("/getallCarousels", getallCarousels);
router.delete("/deleteCarousel/:id", deleteCarousels);
router.put("/updateCarousel/:id", updateCarousel);
export default router;

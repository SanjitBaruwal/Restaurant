import mongoose from "mongoose";
const carouselSchema = new mongoose.Schema({
  background: {
    public_id: String,
    url: String,
  },
  item: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Carousel = mongoose.model("Carousel", carouselSchema);
export default Carousel;

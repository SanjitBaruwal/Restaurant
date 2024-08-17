import express, { urlencoded } from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import carouselRouter from "./router/carouselRouter.js";
import menuRouter from "./router/menuRouter.js";
import messageRouter from "./router/messageRouter.js";
import orderRouter from "./router/orderRouter.js";
import reservationRouter from "./router/reservationRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddlewares.js";

const app = express();
config({ path: "./config.env" });
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND,
    methods: ["PUT", "PATCH", "GET", "DELETE", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

app.get("/", (req, res) => {
  res.send("Server is running.");
});
app.use("/api/v1/admin", carouselRouter);
app.use("/api/v1/admin/menu", menuRouter);
app.use("/api/v1/admin/message", messageRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/reservation", reservationRouter);

app.use(errorMiddleware);
export default app;

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./route/foodRoute.js";
import userRouter from "./route/userRoute.js";
import "dotenv/config.js";
import cartRouter from "./route/cardRoute.js";
import orderRouter from "./route/orderRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter); 
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

// Root endpoint
app.get("/", (req, res) => {
    res.send("API is running");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

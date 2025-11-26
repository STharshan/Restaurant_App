import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Tharsan:Tharsan123@cluster0.3px7s.mongodb.net/food-del')
    .then(() => {
        console.log("Connected to MongoDB");
    })
}    
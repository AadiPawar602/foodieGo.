import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatefood:06022002@cluster0.yyese.mongodb.net/').then (() =>console.log("DB Connected"));
}
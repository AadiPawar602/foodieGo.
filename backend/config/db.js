import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://<your-db>:<your-password>@cluster0.yyese.mongodb.net/').then (() =>console.log("DB Connected"));
}

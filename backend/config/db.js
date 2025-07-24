import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect(
        'mongodb+srv://navgrero09:Seeduwa123%23@cluster0.e8fyggg.mongodb.net/food_order').then(()=>console.log("DB Connected"));
}
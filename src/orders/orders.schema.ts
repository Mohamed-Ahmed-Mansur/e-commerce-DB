/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import mongoose from "mongoose";

export let orderSchema = new mongoose.Schema({
    userID: Number,
    orderID: Number,
    products: [Number],
    totalPrice: Number
})
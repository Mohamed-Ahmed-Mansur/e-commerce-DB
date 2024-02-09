/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import mongoose from "mongoose";

export let productSchema = new mongoose.Schema({
    productID: Number,
    name: String,
    price: Number,
    description: String
})
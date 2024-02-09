/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import mongoose, { Schema } from "mongoose";

export let customerSchema = new mongoose.Schema({
    id: { type: Schema.Types.ObjectId, required: true, auto: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
})
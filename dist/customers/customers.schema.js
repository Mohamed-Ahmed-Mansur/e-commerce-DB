"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.customerSchema = new mongoose_1.default.Schema({
    id: { type: mongoose_1.Schema.Types.ObjectId, required: true, auto: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
});
//# sourceMappingURL=customers.schema.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.orderSchema = new mongoose_1.default.Schema({
    userID: Number,
    orderID: Number,
    products: [Number],
    totalPrice: Number
});
//# sourceMappingURL=orders.schema.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.default.Schema({
    productID: Number,
    name: String,
    price: Number,
    description: String
});
//# sourceMappingURL=products.schema.js.map
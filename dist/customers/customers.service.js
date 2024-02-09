"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let CustomersService = class CustomersService {
    constructor(CustomerModel) {
        this.CustomerModel = CustomerModel;
    }
    async create(Customer) {
        let newCustomer = new this.CustomerModel(Customer);
        await newCustomer.save();
        return { message: "Added Successfully", data: newCustomer };
    }
    findAll() {
        return this.CustomerModel.find({});
    }
    async findOne(id) {
        return await this.CustomerModel.findOne({ userID: id });
    }
    async update(id, Customer) {
        if (await this.CustomerModel.findOne({ email: Customer.email })) {
            return "email already exist";
        }
        await this.CustomerModel.updateOne({ userID: id }, { $set: Customer });
        return this.CustomerModel.find({});
    }
    async remove(id) {
        await this.CustomerModel.deleteOne({ userID: id });
        return this.CustomerModel.find({});
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('cutomers')),
    __metadata("design:paramtypes", [Object])
], CustomersService);
//# sourceMappingURL=customers.service.js.map
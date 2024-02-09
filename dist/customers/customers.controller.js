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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const customer_reg_1 = require("./dto/customer-reg");
const customer_log_1 = require("./dto/customer-log");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    Reg(customerReg) {
        return this.customerService.Reg(customerReg);
    }
    Login(customerLog, res) {
        return this.customerService.Log(customerLog, res);
    }
    findAll() {
        return this.customerService.findAll();
    }
    findOne(id) {
        return this.customerService.findOne(+id);
    }
    update(id, updateCustomerDto) {
        return this.customerService.update(+id, updateCustomerDto);
    }
    remove(id) {
        return this.customerService.remove(+id);
    }
    getCustomerOrders(id) {
        return this.customerService.getCustomerOrdersById(+id);
    }
};
exports.CustomerController = CustomerController;
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)('reg'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof customer_reg_1.CustomerReg !== "undefined" && customer_reg_1.CustomerReg) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "Reg", null);
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)('log'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof customer_log_1.CustomerLog !== "undefined" && customer_log_1.CustomerLog) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "Login", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "findOne", null);
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof customer_reg_1.CustomerReg !== "undefined" && customer_reg_1.CustomerReg) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/orders'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "getCustomerOrders", null);
exports.CustomerController = CustomerController = __decorate([
    (0, common_1.Controller)('customer'),
    __metadata("design:paramtypes", [typeof (_a = typeof customer_service_1.CustomerService !== "undefined" && customer_service_1.CustomerService) === "function" ? _a : Object])
], CustomerController);
//# sourceMappingURL=customers.controller.js.map
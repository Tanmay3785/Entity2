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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zaka = void 0;
// src/entities/Zaka.ts
const typeorm_1 = require("typeorm");
const address_1 = require("./address");
let Zaka = class Zaka {
};
exports.Zaka = Zaka;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Zaka.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Zaka.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Zaka.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => address_1.Address, (address) => address.user, {}),
    __metadata("design:type", Array)
], Zaka.prototype, "addresses", void 0);
exports.Zaka = Zaka = __decorate([
    (0, typeorm_1.Entity)()
], Zaka);

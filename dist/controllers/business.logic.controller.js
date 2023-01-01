"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBalance = void 0;
const api_response_1 = require("../utils/api.response");
const updateBalance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, api_response_1.success)(res, {});
    const number = Math.floor(Math.random() * 100);
    if (number % 2 === 0)
        (0, api_response_1.success)(res, {});
    else
        (0, api_response_1.error)(res, {});
});
exports.updateBalance = updateBalance;
//# sourceMappingURL=business.logic.controller.js.map
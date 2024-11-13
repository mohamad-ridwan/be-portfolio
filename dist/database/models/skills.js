"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillsDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const skills = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    data: {
        type: Array
    }
}, {
    timestamps: true
});
exports.skillsDB = mongoose_1.default.model('skills', skills);

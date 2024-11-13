"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const projects = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    application: {
        type: Array
    }
}, {
    timestamps: true
});
exports.projectsDB = mongoose_1.default.model('project', projects);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const URI = process.env.MONGO_DB_URI;
const connectDB = async (cb) => {
    try {
        const conn = await mongoose_1.default.connect(URI, {
            socketTimeoutMS: 5000,
            connectTimeoutMS: 5000,
        });
        // mongoose.set("useCreateIndex", true);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        cb();
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;

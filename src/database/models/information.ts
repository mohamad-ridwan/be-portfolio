import mongoose from "mongoose";

const Schema = mongoose.Schema;

const information = new Schema(
    {
        webName: {
            type: String
        },
        navbarTitle: {
            type: String
        },
        intro: {
            type: Object
        }
    },
    {
        timestamps: true
    }
)

export const informationDB = mongoose.model('information', information)
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const skills = new Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        data: {
            type: Array
        }
    },
    {
        timestamps: true
    }
)

export const skillsDB = mongoose.model('skills', skills)
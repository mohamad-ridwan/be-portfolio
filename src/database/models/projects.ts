import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projects = new Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        application: {
            type: Array
        }
    },
    {
        timestamps: true
    }
)

export const projectsDB = mongoose.model('project', projects)
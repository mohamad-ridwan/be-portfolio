import { informationRequests } from "../database/resolvers/information"

const {
    getInformation: information
} = informationRequests

function getInformation(_: any, variable: any) {
    return information()
}

export const informationResolvers = {
    getInformation
}
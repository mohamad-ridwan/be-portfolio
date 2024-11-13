"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.informationResolvers = void 0;
const information_1 = require("../database/resolvers/information");
const { getInformation: information } = information_1.informationRequests;
function getInformation(_, variable) {
    return information();
}
exports.informationResolvers = {
    getInformation
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.informationRequests = void 0;
const information_1 = require("../models/information");
async function getInformation() {
    const information = await information_1.informationDB.find();
    if (information?.length === undefined ||
        information?.length === 0 ||
        !information?.[0]?.navbarTitle) {
        return {
            navbarTitle: 'Not found',
            webName: 'Not found',
            intro: {}
        };
    }
    return information[0];
}
exports.informationRequests = {
    getInformation
};

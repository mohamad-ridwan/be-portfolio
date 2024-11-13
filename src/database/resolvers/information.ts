import { informationDB } from '../models/information'

async function getInformation(): Promise<any> {
    const information = await informationDB.find() as any[]
    if (
        information?.length === undefined ||
        information?.length === 0 ||
        !information?.[0]?.navbarTitle
    ) {
        return {
            navbarTitle: 'Not found',
            webName: 'Not found',
            intro: {}
        }
    }
    return information[0]
}

export const informationRequests = {
    getInformation
}
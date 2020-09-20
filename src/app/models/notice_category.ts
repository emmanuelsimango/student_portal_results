import { MyNotice } from './mynotice';

export interface NoticeCategory {

        "id": number,
        "name": string,
        "portal_availability": number,
        "deleted": boolean,
        "created_at": string,
        "updated_at": string,
        "notices": MyNotice[]

}

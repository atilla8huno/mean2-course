import {User} from "./user";
/**
 * Created by ATILLA on 11/07/2016.
 */
export class Note {
    constructor(public _id: string,
                public title: string,
                public description: string,
                public user?: User,
                public created?: Date) {}
}
/**
 * Created by ATILLA on 10/07/2016.
 */
export class User {
    constructor(public _id: string,
                public fullName: string,
                public email: string,
                public password: string,
                public passwordConfirm?: string,
                public notes?: Array<any>,
                public created?: Date) {}
}
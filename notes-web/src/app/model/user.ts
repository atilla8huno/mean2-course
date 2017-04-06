/**
 * Created by ATILLA on 10/07/2016.
 */
export class User {
    constructor(public email: string,
                public password: string,
                public fullName?: string,
                public confirmPassword?: string) {}
}
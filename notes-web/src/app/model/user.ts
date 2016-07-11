/**
 * Created by ATILLA on 10/07/2016.
 */
export class User {
    constructor(public fullName: String,
                public email: String,
                public password: String,
                public passwordConfirm?: String,
                public created?: Date) {}
}
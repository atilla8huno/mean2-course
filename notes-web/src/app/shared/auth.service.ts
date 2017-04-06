/**
 * Created by ATILLA on 13/07/2016.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {User} from "../model/user";

@Injectable()
export class AuthService {

    constructor() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                user.getToken().then((token) => {
                    localStorage.setItem('X-Auth-Token', token);
                });
            } else {
                localStorage.clear();
            }
        });
    }

    signUp(user: User): Observable<any> {
        return Observable.create(observer => {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(
                (currentUser) => {
                    currentUser.getToken().then(
                        (token) => {
                            localStorage.setItem('X-Auth-Token', token);
                            observer.next();
                        }
                    );
                }).catch((err) => {
                    observer.error(err);
                });
        });
    }

    signIn(user: User): Observable<any> {
        return Observable.create(observer => {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(
                (currentUser) => {
                    currentUser.getToken().then(
                        (token) => {
                            localStorage.setItem('X-Auth-Token', token);
                            observer.next();
                        }
                    );
                }).catch((err) => {
                    observer.error(err);
                });
        });
    }

    signOut(): Observable<any> {
        return Observable.create(observer => {
            firebase.auth().signOut().then(
                () => {
                    observer.next();
                }).catch((err) => {
                    observer.error(err);
                });
        });
    }

    static isAutheticated(): boolean {
        if (firebase.auth().currentUser) {
            return true;
        } else {
            return false;
        }
    }
}
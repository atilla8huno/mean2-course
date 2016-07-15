/**
 * Created by ATILLA on 13/07/2016.
 */
import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AuthService {

    constructor() {}

    signUp(user:User): Observable<any> {
        return Observable.create(observer => {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(function (currentUser) {
                    currentUser.getToken().then(function (token) {
                        localStorage.setItem('X-Auth-Token', token);
                    });

                    observer.next();
                }).catch(function (err) {
                    observer.error(err);
                });
        });
    }

    signIn(user:User): Observable<any> {
        return Observable.create(observer => {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(function (currentUser) {
                    currentUser.getToken().then(function (token) {
                        localStorage.setItem('X-Auth-Token', token);
                    });

                    observer.next();
                }).catch(function (err) {
                    observer.error(err);
                });
        });
    }

    signOut(): Observable<any> {
        return Observable.create(observer => {
            firebase.auth().signOut()
                .then(function () {
                    localStorage.clear();

                    observer.next();
                }).catch(function (err) {
                    observer.error(err);
                });
            });
    }

    isAutheticated(): boolean {
        return firebase.auth().currentUser;
    }
}
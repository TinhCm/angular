import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    public _behaviorSubject = new BehaviorSubject<any>(null);

    public sendMessage(msg: any) {
        this._behaviorSubject.next(msg);
    }

    constructor(private _http: HttpClient) {}

    getdata() {
        return this._http.get('http://localhost:3000/user');
    }

    getdataUser(id: any) {
        return this._http.get('http://localhost:3000/user/' + id);
    }

    delete(id: any) {
        return this._http.delete('http://localhost:3000/user/' + id);
    }

    add(user: any) {
        console.log('Du lieu post: ' + user);
        return this._http.post('http://localhost:3000/user/', user);
    }

    edit(user: any, id: any) {
        return this._http.put('http://localhost:3000/user/' + id, user);
    }
}

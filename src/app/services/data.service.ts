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
        return this._http.get('https://dvtinh.glitch.me/user');
    }

    getdataUser(id: any) {
        return this._http.get('https://dvtinh.glitch.me/user/' + id);
    }

    delete(id: any) {
        return this._http.delete('https://dvtinh.glitch.me/user/' + id);
    }

    add(user: any) {
        console.log('Du lieu post: ' + user);
        return this._http.post('https://dvtinh.glitch.me/user/', user);
    }

    edit(user: any, id: any) {
        return this._http.put('https://dvtinh.glitch.me/user/' + id, user);
    }
}

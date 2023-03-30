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

    delete(id:any){
        let del = this._http.delete('http://localhost:3000/user/' + id);
        del.subscribe(res =>{
           
        });
    }

    add(user: any){
        let add = this._http.post('http://localhost:3000/user/',user)
        add.subscribe(res=>{
           
        })
    }

    edit(user: any, id: any){
        let add = this._http.put('http://localhost:3000/user/' + id, user)
        return add;
    }
}

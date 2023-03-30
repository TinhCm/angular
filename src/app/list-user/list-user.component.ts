import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit{
    newdata: any;
    data:any;
    constructor(public _apiservie: DataService, private _service: DataService, private router: Router) {}

    ngOnInit() {
        this._apiservie.getdata().subscribe((res) => {
            this.newdata = res;
        });
        // this._service._behaviorSubject.subscribe((data) => {
        //     this.data = data;
        //     this._apiservie.getdata().subscribe((res) => {
        //         this.newdata = res;
        //     });
        // });
        console.log('re-render Oninit')
    }

    onClick(item: any): void {
        this._service.sendMessage(item);
        this.router.navigate(['/detail']);
    }

    addUser(){
        this.router.navigate(['/add-user']);
    }

    delete(item:any): void{
        debugger;
        this._service.delete(item.id);
    }

    edit(item:any){
        this._service.sendMessage(item);
        this.router.navigate(['/edit-user'])
        // this._service._behaviorSubject.subscribe((data) => {
        //     this.data = data;
        //     // this._apiservie.getdata().subscribe((res) => {
        //     //     this.newdata = res;
        //     // });
        // });

        console.log(this.data);
        // console.log('Re-render');
    }
}

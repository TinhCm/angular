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
    constructor(public _apiservie: DataService, private _service: DataService, private router: Router) {}

    ngOnInit() {
        this._apiservie.getdata().subscribe((res) => {
            this.newdata = res;
        });
    }

    onClick(item: any): void {
        this._service.sendMessage(item);
        this.router.navigate([`/detail/${item.id}`]);
    }

    addUser(){
        this.router.navigate(['/add-user']);
    }

    delete(item:any): void{
        this._service.delete(item.id).subscribe(res=>{
            this._apiservie.getdata().subscribe((res) => {
                this.newdata = res;
            });
        })
    }

    edit(item:any){
        this._service.sendMessage(item);
        this.router.navigate([`/edit-user/${item.id}`])
    }
}

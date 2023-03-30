import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
    constructor(private _service: DataService, private activatedRoute: ActivatedRoute, public _apiservie: DataService) {}

    user: any;

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => { 
            this._apiservie.getdataUser(params['id']).subscribe((res) => {
                this.user = res;
            });
        });
    }
}

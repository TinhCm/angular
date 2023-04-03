import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
    constructor(
        private _service: DataService,
        private activatedRoute: ActivatedRoute,
        public _apiservie: DataService,
    ) {}

    user: any;
    items: MenuItem[] = [];
    home!: MenuItem;

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this._apiservie.getdataUser(params['id']).subscribe((res) => {
                this.user = res;
            });
        });
        this.items = [{ label: 'List Users', routerLink: '/list-user' }, { label: 'Detail' }];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }
}

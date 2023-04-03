import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    items: MenuItem[] = [];
    home!: MenuItem;
    constructor() {}

    ngOnInit() {
        this.items = [{ label: 'About' }];
        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }
}

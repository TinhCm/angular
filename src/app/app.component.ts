import { Component, Input } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'TH2';
    newdata: any;
    items: MenuItem[] = [];

    activeItem!: MenuItem;

    constructor(public _apiservie: DataService, private _service: DataService, private router: Router) {}
    ngOnInit() {
        this._apiservie.getdata().subscribe((res) => {
            this.newdata = res;
        });
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
            { label: 'List User', icon: 'pi pi-users', routerLink: '/list-user' },
            { label: 'About', icon: 'pi pi-info-circle', routerLink: '/about' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' },
        ];

        this.activeItem = this.items[0];
    }

    onClick(item: any): void {
        this._service.sendMessage(item);
        this.router.navigate(['/list-user']);
    }
}

import { Component, Input } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'TH2';
    newdata: any;

    constructor(public _apiservie: DataService, private _service: DataService, private router: Router) {}
    ngOnInit() {
        this._apiservie.getdata().subscribe((res) => {
            this.newdata = res;
        });
    }

    onClick(item: any): void {
        this._service.sendMessage(item);
        this.router.navigate(['/list-user']);
    }
}

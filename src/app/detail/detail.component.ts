import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
    constructor(private _service: DataService) {}

    user: any;

    ngOnInit() {
        this._service._behaviorSubject.subscribe((data) => {
            this.user = data;
        });
    }
}

import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-action-user',
    templateUrl: './action-user.component.html',
    styleUrls: ['./action-user.component.scss'],
})
export class ActionUserComponent {

   constructor(private _service: DataService, private router: Router) {}

    ngInit(){
        
    }

    onSubmit(form: any): void {
        this._service.add(form);
        this.router.navigate(['/list-user'])
    }
}

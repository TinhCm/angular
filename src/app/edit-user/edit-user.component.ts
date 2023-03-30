import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  constructor(private _service: DataService, private router: Router) {}

    user: any;

    ngOnInit() {
        this._service._behaviorSubject.subscribe((data) => {
            this.user = data;
        });
    }

  onSubmit(form: any): void {
    this._service.edit(this.user, this.user.id).subscribe(res => {
      // this._service.sendMessage(this.user);
      this.router.navigate(['/list-user']);
    });
   
}
}
